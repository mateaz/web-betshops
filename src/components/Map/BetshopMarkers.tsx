import React from "react";
import { LatLngExpression } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Marker } from "react-leaflet";
import { Betshop } from "../../types/betshop";

import { createIcon } from "../../utils/getIcon";
import { useSelectedBetshop } from "../../hooks.ts/useSelectedBetshop";

interface BetshopMarkersProps {
  betshopMarkers: Betshop[];
}

export const BetshopMarkers: React.FC<BetshopMarkersProps> = ({
  betshopMarkers,
}) => {
  const { betshopId, setBetshopId } = useSelectedBetshop();

  const handleOnClickMarker = (selectedMarkedId: number): void => {
    if (selectedMarkedId !== betshopId) {
      setBetshopId(selectedMarkedId);
    } else {
      setBetshopId(undefined);
    }
  };

  const getMarkerIcon = (index: number) => {
    if (index === betshopId) return createIcon(betshopId);
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
