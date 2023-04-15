import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Betshop } from "../types/betshop";
import { BetshopMarkers } from "./BetshopMarkers";
import { LoadingSpinner } from "./shared/LoadingSpinner";
import { GeolocationMarker } from "./GeolocationMarker";
import { ResetView } from "./ResetView";

interface MapProps {
  betshops: Betshop[];
}

export const MapLeaflet: React.FC<MapProps> = ({ betshops }) => {
  return (
    <div className="h-screen overflow-hidden w-[400px] drop-shadow-md max-[630px]:w-screen">
      {!betshops && <LoadingSpinner text="Betshop data is loading..." />}

      <MapContainer
        center={[48.137154, 11.576124]} // staviti u neku varijablu van
        zoom={10} // staviti u neku varijablu van
        maxZoom={15} // staviti u neku varijablu van
        minZoom={10} // staviti u neku varijablu van
        className="h-screen border-2 border-white w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {betshops.length > 0 && <BetshopMarkers betshopMarkers={betshops} />}
        <ResetView />
        <GeolocationMarker />
      </MapContainer>
    </div>
  );
};
