export type ResponsSlotStep = {
  agenda_id: number;
  practitioner_agenda_id: number | null;
  start_date: string;
  end_date: string;
  visit_motive_id: number;
};

export type ResponsSlots = {
  agenda_id: number;
  practitioner_agenda_id: number | null;
  start_date: string;
  end_date: string;
  steps: ResponsSlotStep[];
};

export type ResponseAvailability = {
  date: string;
  slots: ResponsSlots[];
};

export type ResponseWithSlots = {
  total: number;
  availabilities: ResponseAvailability[];
};

export type ResponseWithoutSlots = {
  total: 0;
  next_slot: string;
  availabilities: ResponseAvailability[];
};

export type ResponseNoAvailability = {
  availabilities: ResponseAvailability[];
  total: 0;
  reason: string;
  message: string;
};

export type Response =
  | ResponseWithSlots
  | ResponseWithoutSlots
  | ResponseNoAvailability;
