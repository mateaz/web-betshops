/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Betshop } from "../types/betshop";
import { getBetshops } from "../lib/mapService";
import { Sidebar } from "./Sidebar/Sidebar";
import { MapLeaflet } from "./Map/MapLeaflet";
import { LoadingSpinner } from "./shared/LoadingSpinner";
import { mapConstants } from "../utils/constants";

export const Layout: React.FC = () => {
  const [betshopMarkers, setBetshopMarkers] = useState<Betshop[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    getBetshops(mapConstants.bBox)
      .then((response) => {
        setBetshopMarkers(response.data.betshops);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner text="Betshop data is loading..." />;

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-row gap-x-[15px] justify-center">
      <MapLeaflet betshops={betshopMarkers} />
      <Sidebar betshops={betshopMarkers} />
    </div>
  );
};
