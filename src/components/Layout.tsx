/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Betshop } from "../types/betshop";
import { getBetShops } from "../lib/mapService";
import { Sidebar } from "./Sidebar";
import { MapLeaflet } from "./MapLeaflet";
import { LoadingSpinner } from "./shared/LoadingSpinner";

export const Layout: React.FC = () => {
  const [betshopMarkers, setBetshopMarkers] = useState<Betshop[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getBetShops([48.16124, 11.60912, 48.12229, 11.52741])
      .then((response) => {
        setBetshopMarkers(response.data.betshops);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner text="Betshop data is loading..." />;

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-row gap-x-[15px]">
      <MapLeaflet betshops={betshopMarkers} />
      <Sidebar betshops={betshopMarkers} />
    </div>
  );
};
