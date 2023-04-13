/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Betshop } from "../types/betshop";
import { getBetShops } from "../lib/mapService";
import { BetshopMarkers } from "./betshopMarkers";
import { Sidebar } from "./sidebar/sidebar";

export const MapLeaflet: React.FC = () => {
  const [betshopMarkers, setBetshopMarkers] = useState<Betshop[]>();
  useEffect(() => {
    // 48.16124,11.60912,48.12229,11.52741
    // 68.720441, 103.271484, 13.325485, -63.984375
    getBetShops([48.16124, 11.60912, 48.12229, 11.52741]).then((response) => {
      console.log(response.data.betshops);
      setBetshopMarkers(response.data.betshops);
    });
  }, []);

  return (
    <div className="font-roboto relative h-screen w-screen overflow-hidden">
      <div className="z-0 h-screen w-screen overflow-hidden flex flex-row">
        <MapContainer
          center={[48.137154, 11.576124]} // staviti u neku varijablu van
          zoom={7} // staviti u neku varijablu van
          // maxZoom={13} // staviti u neku varijablu van
          // minZoom={6} // staviti u neku varijablu van
          // zoomControl={false}

          className="h-screen border-2 border-white w-[40rem]" // postaviti visinu
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
        {/* buduci sidebar */}
        {betshopMarkers && <Sidebar betshops={betshopMarkers} />}
      </div>
    </div>
  );
};
