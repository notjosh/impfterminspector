import axios from 'axios';
import { Response, ResponseWithoutSlots, ResponseWithSlots } from './types';

declare const Response: Response;

type Result = {
  next: string | null;
  data: Response;
};

const fetchNextAvailability = async (url: string): Promise<Result> => {
  const response = await axios.get<Response>(url);

  const { data } = response;

  let next: string | null = null;

  if (data.availabilities.length > 0 && data.total > 0) {
    let success = data as ResponseWithSlots;

    const availabilities = success.availabilities.sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    next = availabilities[0].date;
  } else {
    // we either have a future, or a "sorry, no bookings at all"
    if ((<ResponseWithoutSlots>data).next_slot) {
      const dataWithoutSlots = data as ResponseWithoutSlots;
      next = dataWithoutSlots.next_slot;
    }
  }

  return {
    next,
    data,
  };
};

// const fetchNextAvailabilityMock = async (url: string): Promise<Result> => {
//   const next = '2021-06-15';
//   const data = {
//     total: 0,
//     availabilities: [
//       { date: '2021-04-06', slots: [] },
//       { date: '2021-04-07', slots: [] },
//       { date: '2021-04-08', slots: [] },
//       { date: '2021-04-09', slots: [] },
//       { date: '2021-04-10', slots: [] },
//     ],
//     next_slot: '2021-06-05',
//   };

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         next,
//         data,
//       });
//     }, Math.floor(Math.random() * 2000));
//   });
// };

export default fetchNextAvailability;
