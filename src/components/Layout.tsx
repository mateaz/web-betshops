import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { MapLeaflet } from "./Map/MapLeaflet";
import { useMapBoundingBox } from "../hooks/useMapBoundingBox";
import { getBetshops } from "../lib/mapService";
import { Betshop } from "../types/betshop";
import { RefreshPage } from "./shared/RefreshPage";

export const Layout: React.FC = () => {
  const [betshopMarkers, setBetshopMarkers] = useState<Betshop[]>();
  const { boundingBox } = useMapBoundingBox();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (boundingBox) {
      setTimeout(() => {
        getBetshops(boundingBox)
          .then((response) => {
            setBetshopMarkers(response.data.betshops);
            setError(false);
          })
          .catch(() => setError(true));
      }, 500);
    }
  }, [boundingBox]);

  const handleOnRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      {error ? (
        <RefreshPage onClick={handleOnRefreshPage} />
      ) : (
        <div className="relative h-screen w-screen overflow-hidden flex flex-row gap-x-[0px] sm:gap-x-[15px] justify-center">
          <MapLeaflet betshops={betshopMarkers} />
          <Sidebar betshops={betshopMarkers} />
        </div>
      )}
    </div>
  );
};
