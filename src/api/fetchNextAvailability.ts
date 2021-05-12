import axios from 'axios';
import { Response, ResponseWithoutSlots, ResponseWithSlots } from './types';

declare const Response: Response;

type Result = {
  next: string | null;
  data: Response;
};

const fetchNextAvailability = async (url: string): Promise<Result> => {
  let cookies = {};

  if (process.env.CF_BM != null) {
    console.log(`using custom cookie: ${process.env.CF_BM}`);
    cookies = {
      Cookie: `__cf_bm=${process.env.CF_BM}`,
    };
  }

  const response = await axios.get<Response>(url, {
    withCredentials: true,
    headers: {
      ...cookies,
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
    },
  });

  const { data } = response;

  let next: string | null = null;

  if (data.availabilities.length > 0 && data.total > 0) {
    let success = data as ResponseWithSlots;

    const availabilities = success.availabilities.sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    next = availabilities[0].date;
  } else {
    // we either have a future, or a "sorry, no bookings at all"
    if ((<ResponseWithoutSlots>data).next_slot) {
      const dataWithoutSlots = data as ResponseWithoutSlots;
      next = dataWithoutSlots.next_slot;
    }
  }

  return {
    next,
    data,
  };
};

// const fetchNextAvailabilityMock = async (url: string): Promise<Result> => {
//   const next = '2030-01-01';
//   const data = {
//     total: -1,
//     availabilities: [],
//     next_slot: '2030-01-01',
//   };

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         next,
//         data,
//       });
//     }, Math.floor(Math.random() * 2000));
//   });
// };

export default fetchNextAvailability;
