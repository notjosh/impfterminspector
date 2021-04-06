const yyyymmdd = (): string => {
  const date = new Date();

  const yyyy = date.getUTCFullYear();
  const mm = (date.getUTCMonth() + 1).toString(10).padStart(2, '0');
  const dd = date.getUTCDate().toString(10).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
};

export default yyyymmdd;
