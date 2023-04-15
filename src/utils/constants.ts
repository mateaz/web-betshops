import {
  LatLngBoundsExpression,
  LatLngExpression,
  PointExpression,
} from "leaflet";
import defaultIconUrl from "../assets/ic_pin_normal.png";
import activeIconUrl from "../assets/ic_pin_active.png";
import locationImg from "../assets/ic_bet_shop_location.png";
import openHoursImg from "../assets/ic_bet_shop_hours.png";
import closeHoursImg from "../assets/ic_close.png";
import nearMeImg from "../assets/icon_near_me.png";

export {
  defaultIconUrl,
  activeIconUrl,
  locationImg,
  openHoursImg,
  closeHoursImg,
  nearMeImg,
};

export const defaultIconSize: PointExpression = [16.5, 43];
export const activeIconSize: PointExpression = [24, 63];

export const temperatureScales: number[] = [14, 20, 25];

interface MapConstants {
  center: LatLngExpression;
  zoom: number;
  maxZoom: number;
  minZoom: number;
  bounds: LatLngBoundsExpression;
}

export const mapConstants: MapConstants = {
  center: [48.137154, 11.576124],
  zoom: 10,
  maxZoom: 18,
  minZoom: 10,
  bounds: [
    [48.16124, 11.60912],
    [48.12229, 11.52741],
  ],
};
