/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { MapLeaflet } from "./Map/MapLeaflet";
import { useMapBoundingBox } from "../hooks/useMapBoundingBox";
import { getBetshops } from "../lib/mapService";
import { Betshop } from "../types/betshop";

export const Layout: React.FC = () => {
  const [betshopMarkers, setBetshopMarkers] = useState<Betshop[]>();
  const { boundingBox } = useMapBoundingBox();

  useEffect(() => {
    if (boundingBox) {
      setTimeout(() => {
        getBetshops(boundingBox).then((response) => {
          setBetshopMarkers(response.data.betshops);
        });
      }, 500);
    }
  }, [boundingBox]);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-row gap-x-[15px] justify-center">
      <MapLeaflet betshops={betshopMarkers} />
      <Sidebar betshops={betshopMarkers} />
    </div>
  );
};
