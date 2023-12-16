import dayjs from "dayjs";

export const formatDate = (date) => {
  return dayjs(date).format("MMM d, YYYY");
};
export const formatDateYears = (date) => {
  return dayjs(date).format("YYYY");
};
export const getHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
};
