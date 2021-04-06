import { InsuranceType } from './insurance-types';
import { VaccinationType } from './vaccination-types';

export type VaccinationSite = {
  name: string;
  doctolib: {
    practiceId: string;
    agendaIds: string[];
  };
};

export type BookingSource = {
  site: VaccinationSite;
  vaccination: VaccinationType;
  insurance: InsuranceType;
};
