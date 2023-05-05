import React, { useEffect, useState } from "react";
import { Betshop } from "../../types/betshop";
import { CloseIcon } from "../shared/CloseIcon";
import { InformationBox } from "./InformationBox";
import { WeatherBox } from "./WeatherBox";
import { useSelectedBetshop } from "../../hooks/useSelectedBetshop";

interface SidebarProps {
  betshops: Betshop[];
}

export const Sidebar: React.FC<SidebarProps> = ({ betshops }) => {
  const [show, setShow] = useState<boolean>(false);
  const [clickedBetshop, setClickedBetshop] = useState<any>();
  const [betId, setBetId] = useState<number>();
  const { betshopId } = useSelectedBetshop();

  useEffect(() => {
    if (betId !== betshopId) {
      setBetId(betshopId);
      setClickedBetshop(betshops?.filter((b) => b.id === betshopId)[0]);
    }
    setShow(!!clickedBetshop);
  }, [betId, clickedBetshop, betshops, betshopId]);

  return (
    <div>
      {betshops && (
        <div
          className={`sidebar relative drop-shadow-md w-96 h-screen ${
            show && "show"
          }`}
        >
          <button
            className="absolute right-2 top-2 min-[631px]:hidden"
            type="button"
            onClick={() => setShow(false)}
          >
            <CloseIcon />
          </button>
          {clickedBetshop ? (
            <div className="flex flex-col gap-y-[15px] h-full overflow-hidden">
              <InformationBox betshop={clickedBetshop} />
              <WeatherBox
                lat={clickedBetshop?.location.lat}
                lng={clickedBetshop?.location.lng}
              />
            </div>
          ) : (
            <p className="flex h-full items-center text-blue font-medium italic">
              To get some information about a betshop, click on icon
            </p>
          )}
        </div>
      )}
    </div>
  );
};
