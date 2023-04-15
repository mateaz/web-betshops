import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(isToday);

export const convertDate = (date: string) => dayjs(date).format("dd DD MMMM");

export const isDateToday = (date: string) => dayjs(date).isToday();

export const getHoursFromDate = (date: string) => dayjs(date).format("HH:mm");
