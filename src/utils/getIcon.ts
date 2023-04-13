import L from "leaflet";
import {
  activeIconSize,
  activeIconUrl,
  defaultIconSize,
  defaultIconUrl,
} from "./constants";

export const createIcon = (activeMarker?: number) => {
  // vidi mozes li drugacije povo sloziti
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
