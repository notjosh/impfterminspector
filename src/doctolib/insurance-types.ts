export enum InsuranceType {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export const insuranceTypes: Record<InsuranceType, string> = {
  [InsuranceType.PRIVATE]: 'private',
  [InsuranceType.PUBLIC]: 'public',
};

export const insuranceNames: Record<InsuranceType, string> = {
  [InsuranceType.PRIVATE]: 'Private',
  [InsuranceType.PUBLIC]: 'Public',
};
