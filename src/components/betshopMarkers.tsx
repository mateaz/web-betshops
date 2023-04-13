import React, { useState } from "react";
// import { MarkerLayer } from "react-leaflet-marker"; // DEINSTLAIRATI
import { Icon, LatLngExpression, PointExpression } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Marker } from "react-leaflet";
import { Betshop } from "../types/betshop";

import { createIcon } from "../utils/getIcon";

interface BetshopMarkersProps {
  betshopMarkers: Betshop[];
}

export const BetshopMarkers: React.FC<BetshopMarkersProps> = ({
  betshopMarkers,
}) => {
  const [activeMarker, setActiveMarker] = useState<number>();

  const handleOnClickMarker = (selectedMarkedId: number): void => {
    if (selectedMarkedId !== activeMarker) setActiveMarker(selectedMarkedId);
    else setActiveMarker(undefined);
  };

  const getMarkerIcon = (
    index: number,
  ): Icon<{
    iconUrl: string;
    iconAnchor: PointExpression;
  }> => {
    if (index === activeMarker) return createIcon(activeMarker);
    return createIcon();
  };

  return (
    <div>
      {betshopMarkers &&
        betshopMarkers.map(({ id, location }) => {
          const latLng: LatLngExpression = [location.lat, location.lng];

          return (
            <MarkerClusterGroup>
              <Marker
                icon={getMarkerIcon(id)}
                position={latLng}
                key={id}
                eventHandlers={{
                  click: () => handleOnClickMarker(id),
                }}
              />
            </MarkerClusterGroup>
          );
        })}
    </div>
  );
};
