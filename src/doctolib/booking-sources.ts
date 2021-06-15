import { InsuranceType, insuranceTypes } from './insurance-types';
import { BookingSource } from './types';
import * as VaccinationSite from './vaccination-sites';
import { VaccinationType } from './vaccination-types';

export const bookingSources: BookingSource[] = [
  {
    site: VaccinationSite.arena,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.BIONTECH_PFIZER,
  },
  {
    site: VaccinationSite.arena,
    insurance: InsuranceType.PRIVATE,
    vaccination: VaccinationType.BIONTECH_PFIZER,
  },

  {
    site: VaccinationSite.messe,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.BIONTECH_PFIZER,
  },
  {
    site: VaccinationSite.messe,
    insurance: InsuranceType.PRIVATE,
    vaccination: VaccinationType.BIONTECH_PFIZER,
  },

  {
    site: VaccinationSite.tegel,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.BIONTECH_PFIZER,
  },
  {
    site: VaccinationSite.tegel,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.ASTRAZENECA,
  },
  {
    site: VaccinationSite.tegel,
    insurance: InsuranceType.PRIVATE,
    vaccination: VaccinationType.BIONTECH_PFIZER,
  },
  {
    site: VaccinationSite.tegel,
    insurance: InsuranceType.PRIVATE,
    vaccination: VaccinationType.ASTRAZENECA,
  },
  {
    site: VaccinationSite.tegel,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.MODERNA,
    override: {
      agendaIds: [
        '466143',
        '466141',
        '466131',
        '466132',
        '466134',
        '466135',
        '466137',
        '466138',
        '466140',
        '466128',
        '466136',
        '466133',
        '466139',
        '466129',
        '466130',
      ],
    },
  },

  {
    site: VaccinationSite.tempelhof,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.ASTRAZENECA,
  },
  {
    site: VaccinationSite.tempelhof,
    insurance: InsuranceType.PRIVATE,
    vaccination: VaccinationType.ASTRAZENECA,
  },
  {
    site: VaccinationSite.tempelhof,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.MODERNA,
    override: {
      agendaIds: [
        '467906',
        '481913',
        '481915',
        '481920',
        '481917',
        '467934',
        '467937',
        '467938',
        '467939',
        '467910',
        '467908',
        '467903',
        '467907',
        '467935',
        '467936',
        '467893',
        '467895',
        '467896',
        '467900',
        '467901',
        '467905',
        '467911',
        '467897',
        '467898',
        '467912',
        '467940',
        '481914',
        '481916',
        '481919',
        '481921',
        '467894',
        '467933',
        '467899',
      ],
    },
  },

  {
    site: VaccinationSite.velodrom,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.BIONTECH_PFIZER,
  },
  {
    site: VaccinationSite.velodrom,
    insurance: InsuranceType.PRIVATE,
    vaccination: VaccinationType.BIONTECH_PFIZER,
  },

  {
    site: VaccinationSite.eisstadion,
    insurance: InsuranceType.PUBLIC,
    vaccination: VaccinationType.MODERNA,
  },
];
