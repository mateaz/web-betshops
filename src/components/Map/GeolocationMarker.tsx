import { useEffect, useState } from "react";
import { Circle, useMap } from "react-leaflet";
import { mapConstants } from "../../utils/constants";

export const GeolocationMarker = () => {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map
      .locate()
      .on("locationfound", (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 17);
      })
      .on("locationerror", () => {
        map.flyTo(mapConstants.center, 15);
      });
  }, [map]);

  return position === null ? null : (
    <Circle
      center={position}
      pathOptions={{ fillColor: "blue" }}
      radius={10}
      className="pointer-events-none	"
    />
  );
};
