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
      agendaIds: ['465532', '465526', '465527', '465534'],
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
        '467901',
        '467933',
        '467893',
        '467894',
        '467897',
        '467898',
        '467899',
        '467895',
        '467896',
        '467900',
        '467908',
        '467912',
        '467903',
        '467905',
        '467906',
        '467907',
        '467910',
        '467911',
        '467934',
        '467935',
        '467936',
        '467937',
        '467938',
        '467939',
        '467940',
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
