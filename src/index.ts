import logSymbols from 'log-symbols';
import ora from 'ora';
import fetchNextAvailability from './api/fetchNextAvailability';
import { bookingSources } from './doctolib/booking-sources';
import { insuranceNames } from './doctolib/insurance-types';
import { vaccinationNames } from './doctolib/vaccination-types';
import makeUrl from './util/makeUrl';
import pLimit from 'p-limit';
import chalk from 'chalk';
import daysUntil from './util/daysUntil';
import fs from 'fs';
import Path from 'path';
import { yyyymmddhhmmss } from './util/date';

const limit = pLimit(12);

export const run = async () => {
  const sources = bookingSources.map((bookingSource) => ({
    bookingSource,
    url: makeUrl(bookingSource),
  }));

  const throbber = ora('Configuring requests...').start();
  let jobCount = 0;
  let inFlight = 0;

  const queue = sources.map((source) => {
    return limit(async () => {
      jobCount += 1;
      inFlight += 1;

      throbber.text = `Processing queue ${jobCount}/${sources.length}`;

      const summary = `${chalk.blueBright(
        source.bookingSource.site.name
      )} (${chalk.yellow.underline(
        insuranceNames[source.bookingSource.insurance]
      )}): ${chalk.magentaBright(
        vaccinationNames[source.bookingSource.vaccination]
      )}`;

      try {
        const response = await fetchNextAvailability(source.url);

        throbber
          .succeed(
            `${summary}: ${
              response.next != null
                ? chalk.bold.green(
                    `${response.next} (${daysUntil(response.next).toString(
                      10
                    )} days)`
                  )
                : chalk.bold.red('unavailable')
            }`
          )
          .render();

        inFlight -= 1;

        return {
          source,
          response,
        };
      } catch (error) {
        return {
          source,
          error,
        };
      }
    });
  });

  const results = await Promise.all(queue);

  throbber.clear();

  throbber.stopAndPersist({
    symbol: logSymbols.success,
    text: 'Requests complete!',
  });

  const output = {
    date: new Date().toISOString(),
    results,
  };

  const dir = Path.join(process.cwd(), 'data');
  const filename = `${yyyymmddhhmmss()}.json`;
  const path = Path.join(dir, filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(path, JSON.stringify(output, null, 2));
  console.log(`saved results to ${path}`);
};
