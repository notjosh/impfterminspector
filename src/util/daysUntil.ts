const daysUntil = (str: string, today = new Date()): number => {
  const future = new Date(str);
  today.setHours(0, 0, 0, 0);

  const diffInMilliSeconds =
    Math.abs(future.getTime() - today.getTime()) / 1000;

  const days = Math.floor(diffInMilliSeconds / 86400);

  return days;
};

export default daysUntil;
