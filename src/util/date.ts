const yyyymmdd = (date = new Date()): string => {
  const yyyy = date.getUTCFullYear();
  const mm = (date.getUTCMonth() + 1).toString(10).padStart(2, '0');
  const dd = date.getUTCDate().toString(10).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
};

const hhmmss = (date = new Date()): string => {
  const hh = date.getUTCHours().toString(10).padStart(2, '0');
  const mm = date.getUTCMinutes().toString(10).padStart(2, '0');
  const ss = date.getUTCSeconds().toString(10).padStart(2, '0');

  return `${hh}-${mm}-${ss}`;
};

const yyyymmddhhmmss = (date = new Date()): string => {
  return `${yyyymmdd(date)}-${hhmmss(date)}`;
};

export { yyyymmdd, hhmmss, yyyymmddhhmmss };
