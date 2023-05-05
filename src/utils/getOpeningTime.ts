import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export const currentHour: number = dayjs().hour();

export const startOpenHour: number = 8;
export const endOpenHour: number = 16;

export const isBetshopOpen = (): boolean =>
  currentHour >= startOpenHour && currentHour <= endOpenHour;

export const isToday = (): string => {
  if (currentHour > endOpenHour) return "tomorrow";
  return "today";
};
