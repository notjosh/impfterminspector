export enum InsuranceType {
  PUBLIC,
  PRIVATE,
}

export const insuranceTypes: Record<InsuranceType, string> = {
  [InsuranceType.PRIVATE]: 'private',
  [InsuranceType.PUBLIC]: 'public',
};

export const insuranceNames: Record<InsuranceType, string> = {
  [InsuranceType.PRIVATE]: 'Private',
  [InsuranceType.PUBLIC]: 'Public',
};
