/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Betshop } from "../types/betshop";
import { getBetShops } from "../services/mapService";
import { BetshopMarkers } from "./betshopMarkers";

export const MapLeaflet: React.FC = () => {
  // const [mapRef, setMapRef] = useState<any>();
  const [betshopMarkers, setBetshopMarkers] = useState<Betshop[]>();
  useEffect(() => {
    getBetShops([48.16124, 11.60912, 48.12229, 11.52741]).then((response) => {
      setBetshopMarkers(response.data.betshops);
    });
  }, []);

  return (
    <div className="font-roboto relative h-screen w-screen overflow-hidden">
      <div className="z-0 h-screen w-screen overflow-hidden">
        <MapContainer
          center={[44.436141, 26.10272]} // staviti u neku varijablu van
          zoom={7} // staviti u neku varijablu van
          // maxZoom={13} // staviti u neku varijablu van
          // minZoom={6} // staviti u neku varijablu van
          // zoomControl={false}

          className="h-screen border-2 border-white" // postaviti visinu
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

          {betshopMarkers && <BetshopMarkers betshopMarkers={betshopMarkers} />}
        </MapContainer>
        {/* buduci sidebar vamo */}
      </div>
    </div>
  );
};
