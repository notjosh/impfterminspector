import { InsuranceType } from './insurance-types';
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
