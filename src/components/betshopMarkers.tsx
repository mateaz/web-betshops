import React from "react";
import { MarkerLayer } from "react-leaflet-marker";
import { LatLngExpression } from "leaflet";
import { Betshop } from "../types/betshop";
import { BetShopMarker } from "./marker";

interface BetshopMarkersProps {
  betshopMarkers: Betshop[];
}

export const BetshopMarkers: React.FC<BetshopMarkersProps> = ({
  betshopMarkers,
}) => {
  return (
    <MarkerLayer>
      {betshopMarkers &&
        betshopMarkers.map((b: Betshop) => {
          const location: LatLngExpression = [b.location.lat, b.location.lng];

          return <BetShopMarker position={location} key={b.id} />;
        })}
    </MarkerLayer>
  );
};
