import { PointExpression } from "leaflet";
import defaultIconUrl from "../assets/ic_pin_normal.png";
import activeIconUrl from "../assets/ic_pin_active.png"; // UREDITI
import locationImg from "../assets/ic_bet_shop_location.png";
import openHoursImg from "../assets/ic_bet_shop_hours.png";
import closeHoursImg from "../assets/ic_close.png";

export const defaultIconSize: PointExpression = [16.5, 43];
export const activeIconSize: PointExpression = [24, 63];

export const temperatureScales: number[] = [14, 20, 25];

export {
  defaultIconUrl,
  activeIconUrl,
  locationImg,
  openHoursImg,
  closeHoursImg,
};
