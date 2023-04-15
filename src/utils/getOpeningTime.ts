import dayjs from "dayjs";

export const currentHour: number = dayjs().hour();

export const startOpenHour: number = 8;
export const endOpenHour: number = 16;

export const isBetshopOpen = (): boolean => {
  return currentHour >= startOpenHour && currentHour <= endOpenHour;
};
