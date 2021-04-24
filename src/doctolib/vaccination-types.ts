export enum VaccinationType {
  BIONTECH_PFIZER = 'biontech_pfizer',
  ASTRAZENECA = 'astrazeneca',
  MODERNA = 'moderna',
}

export const visitMotiveIds: Record<VaccinationType, string> = {
  [VaccinationType.BIONTECH_PFIZER]: '2495719',
  [VaccinationType.ASTRAZENECA]: '2597576',
  [VaccinationType.MODERNA]: '2537716',
};

export const vaccinationNames: Record<VaccinationType, string> = {
  [VaccinationType.BIONTECH_PFIZER]: 'BioNTech-Pfizer',
  [VaccinationType.ASTRAZENECA]: 'AstraZeneca',
  [VaccinationType.MODERNA]: 'Moderna',
};
