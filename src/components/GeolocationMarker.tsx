import { useEffect, useState } from "react";
import { Circle, useMap } from "react-leaflet";

export const GeolocationMarker = () => {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map
      .locate()
      .on("locationfound", (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 13);
      })
      .on("locationerror", () => {
        map.flyTo([48.137154, 11.576124], 13);
      });
  }, [map]);

  return position === null ? null : (
    <Circle center={position} pathOptions={{ fillColor: "blue" }} radius={10} />
  );
};
