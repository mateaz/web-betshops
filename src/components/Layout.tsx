/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Betshop } from "../types/betshop";
import { getBetShops } from "../lib/mapService";
import { Sidebar } from "./sidebar";
import { Map } from "./Map";

export const Layout: React.FC = () => {
  const [betshopMarkers, setBetshopMarkers] = useState<Betshop[]>();
  useEffect(() => {
    // 48.16124,11.60912,48.12229,11.52741
    // 68.720441, 103.271484, 13.325485, -63.984375
    getBetShops([48.16124, 11.60912, 48.12229, 11.52741]).then((response) => {
      setBetshopMarkers(response.data.betshops);
    });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-row gap-x-[15px]">
      <Map betshops={betshopMarkers} />
      <Sidebar betshops={betshopMarkers} />
    </div>
  );
};
