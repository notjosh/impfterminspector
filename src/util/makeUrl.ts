import urlcat from 'urlcat';
import { insuranceTypes } from '../doctolib/insurance-types';
import { BookingSource } from '../doctolib/types';
import { visitMotiveIds } from '../doctolib/vaccination-types';
import yyyymmdd from './yyyymmdd';

const alwaysParams = {
  telehealth: 'false',
  destroy_temporary: 'true',
  limit: '5',
};

const makeUrl = (bookingSource: BookingSource) => {
  // https://www.doctolib.de/availabilities.json?
  // start_date=2021-04-06
  // visit_motive_ids=2495719
  // agenda_ids=404656-397841-397843-397842
  // practice_ids=158436
  // insurance_sector=public
  // telehealth=false
  // destroy_temporary=true
  // limit=5

  const start_date = yyyymmdd();
  const visit_motive_ids = visitMotiveIds[bookingSource.vaccination];
  const agenda_ids = bookingSource.site.doctolib.agendaIds.join('-');
  const practice_ids = bookingSource.site.doctolib.practiceId;
  const insurance_sector = insuranceTypes[bookingSource.insurance];

  const params = {
    start_date,
    visit_motive_ids,
    agenda_ids,
    practice_ids,
    insurance_sector,
    ...alwaysParams,
  };

  return urlcat('https://www.doctolib.de/', '/availabilities.json', params);
};

export default makeUrl;
