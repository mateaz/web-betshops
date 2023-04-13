import React, { useState } from "react";
// import { MarkerLayer } from "react-leaflet-marker"; // DEINSTLAIRATI
import { LatLngExpression } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Marker } from "react-leaflet";
import { Betshop } from "../types/betshop";

import { createIcon } from "../utils/getIcon";
import { MyContext } from "../providers/blabla";

interface BetshopMarkersProps {
  betshopMarkers: Betshop[];
}

export const BetshopMarkers: React.FC<BetshopMarkersProps> = ({
  betshopMarkers,
}) => {
  const { setData } = React.useContext(MyContext);
  const [activeMarker, setActiveMarker] = useState<number>();

  const handleOnClickMarker = (selectedMarkedId: number): void => {
    if (selectedMarkedId !== activeMarker) {
      setActiveMarker(selectedMarkedId);
      setData(selectedMarkedId);
    } else {
      setActiveMarker(undefined);
      setData(undefined);
    }
  };

  const getMarkerIcon = (index: number) => {
    if (index === activeMarker) return createIcon(activeMarker);
    return createIcon();
  };

  return (
    <MarkerClusterGroup>
      {betshopMarkers.map(({ id, location }) => {
        const latLng: LatLngExpression = [location.lat, location.lng];
        return (
          <Marker
            icon={getMarkerIcon(id)}
            position={latLng}
            key={id}
            eventHandlers={{
              click: () => handleOnClickMarker(id),
            }}
          />
        );
      })}
    </MarkerClusterGroup>
  );
};
