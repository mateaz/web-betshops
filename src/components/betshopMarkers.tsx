import React, { useState } from "react";
// import { MarkerLayer } from "react-leaflet-marker"; // deinstalirati
import { LatLngExpression } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import { Circle, Marker } from "react-leaflet";
import { Betshop } from "../types/betshop";

import { createIcon } from "../hooks/getIcon";

interface BetshopMarkersProps {
  betshopMarkers: Betshop[];
}

const purpleOptions = { color: "purple" };

export const BetshopMarkers: React.FC<BetshopMarkersProps> = ({
  betshopMarkers,
}) => {
  const [activeMarker, setActiveMarker] = useState<number>();

  const handleOnClickMarker = (selectedMarkedId: number): void => {
    setActiveMarker(selectedMarkedId);
  };

  const getMarkerIcon = (index: number) => {
    if (index === activeMarker) return createIcon(activeMarker);
    return createIcon();
  };

  return (
    <div>
      {betshopMarkers &&
        betshopMarkers.map(({ id, location }) => {
          const latLng: LatLngExpression = [location.lat, location.lng];

          return (
            <>
              <Marker
                icon={getMarkerIcon(id)}
                position={latLng}
                key={id}
                eventHandlers={{
                  click: () => handleOnClickMarker(id),
                }}
              />
              <Circle center={latLng} pathOptions={purpleOptions} radius={10} />
            </>
          );
        })}
    </div>
  );
};
