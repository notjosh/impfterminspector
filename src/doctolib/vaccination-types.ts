export enum VaccinationType {
  BIONTECH_PFIZER,
  ASTRAZENECA,
}

export const visitMotiveIds: Record<VaccinationType, string> = {
  [VaccinationType.BIONTECH_PFIZER]: '2495719',
  [VaccinationType.ASTRAZENECA]: '2597576',
};

export const vaccinationNames: Record<VaccinationType, string> = {
  [VaccinationType.BIONTECH_PFIZER]: 'BioNTech-Pfizer',
  [VaccinationType.ASTRAZENECA]: 'AstraZeneca',
};
