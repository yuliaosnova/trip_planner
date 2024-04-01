export function getTimeFromMillisec(milliseconds: number) {
  const days: number = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor(
    (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes: number = Math.floor(
    (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds: number = Math.floor((milliseconds % (1000 * 60)) / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
