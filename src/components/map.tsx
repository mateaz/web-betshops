/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { getBetShops } from "../services/map";

export const MapLeaflet: React.FC = () => {
  useEffect(() => {
    /*   getBetShops
      .get(`/betshops?boundingBox=${[48.16124, 11.60912, 48.12229, 11.52741]}`)
      .then((response) => {
        console.log(response.data);
      }); */

    getBetShops([48.16124, 11.60912, 48.12229, 11.52741]).then(
      (response: any) => {
        // promijeniti
        console.log(response.data);
      },
    );
  }, []);
  return (
    <div className="font-roboto relative h-screen w-screen overflow-hidden">
      <div className="z-0 h-screen w-screen overflow-hidden">
        <MapContainer
          center={[44.436141, 26.10272]} // staviti u neku varijablu van
          zoom={7} // staviti u neku varijablu van
          maxZoom={13} // staviti u neku varijablu van
          minZoom={6} // staviti u neku varijablu van
          // zoomControl={false}

          className="h-screen w-[25rem] border-2 border-white" // postaviti visinu
          // whenReady={setMapRef}
          maxBounds={[
            [43.44, 20.26],
            [48.27, 31.41],
          ]} // staviti u neku varijablu van
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};
