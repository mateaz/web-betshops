import L, { PointExpression } from "leaflet";
import defaultIconUrl from "../assets/ic_pin_normal.png";
import activeIconUrl from "../assets/ic_pin_active.png";

const defaultIconSize: PointExpression = [16.5, 43];
const activeIconSize: PointExpression = [24, 63];

export const createIcon = (activeMarker?: number) => {
  if (activeMarker)
    return new L.Icon({
      iconUrl: activeIconUrl,
      iconAnchor: activeIconSize,
    });
  return new L.Icon({
    iconUrl: defaultIconUrl,
    iconAnchor: defaultIconSize,
  });
};
