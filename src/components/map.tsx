import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Betshop } from "../types/betshop";
import { BetshopMarkers } from "./betshopMarkers";

interface MapProps {
  betshops: Betshop[];
}

export const Map: React.FC<MapProps> = ({ betshops }) => {
  return (
    <div className="h-screen overflow-hidden w-[400px] drop-shadow-md max-[630px]:w-screen">
      <MapContainer
        center={[48.137154, 11.576124]} // staviti u neku varijablu van
        zoom={7} // staviti u neku varijablu van
        // maxZoom={13} // staviti u neku varijablu van
        // minZoom={6} // staviti u neku varijablu van
        // zoomControl={false}

        className="h-screen border-2 border-white w-full" // postaviti visinu
        // whenReady={setMapRef}
        /*   maxBounds={[
            [43.44, 20.26],
            [48.27, 31.41],
          ]} */ // staviti u neku varijablu van
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {betshops && <BetshopMarkers betshopMarkers={betshops} />}
      </MapContainer>
    </div>
  );
};
