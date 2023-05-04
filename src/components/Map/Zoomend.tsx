// import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import { useMapBoundingBox } from "../../hooks/useMapBoundingBox";

export const Zoomend = () => {
  const { setBoundingBox } = useMapBoundingBox();
  const map = useMap();
  useEffect(() => {
    map.whenReady(() => {
      map.once("moveend zoomend", () => {
        const north = map.getBounds().getNorth();
        const east = map.getBounds().getEast();
        const south = map.getBounds().getSouth();
        const west = map.getBounds().getWest();
        setBoundingBox([north, east, south, west]);
      });
    });
  });

  return null;
};
