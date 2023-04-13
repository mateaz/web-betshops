import dayjs from "dayjs";

export const currentHour = dayjs().hour();

export const startOpenHour = 8;
export const endOpenHour = 16;

export const isBetshopOpen = (): boolean => {
  return currentHour >= startOpenHour && currentHour <= endOpenHour;
};
