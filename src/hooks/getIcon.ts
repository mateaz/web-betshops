import L from "leaflet";
import iconUrl from "../assets/ic_pin_normal.png";

export const getIcon = (_active?: string) => {
  console.log(_active);
  // const iconPath = "../assets/ic_pin_normal.png";
  return L.icon({
    // eslint-disable-next-line global-require
    iconUrl,
    // iconSize: [38, 95],
  });
};
