import React from "react";
import { LatLngExpression } from "leaflet";
import { Marker } from "react-leaflet";
import { getIcon } from "../hooks/getIcon";

interface MarkerProps {
  // hahha?: any;
  position: LatLngExpression;
}

export const BetShopMarker: React.FC<MarkerProps> = ({ position }) => {
  return <Marker position={position} icon={getIcon()} />;
};
