import React, { useEffect, useState } from "react";
import { Betshop } from "../../types/betshop";
import { CloseIcon } from "../shared/CloseIcon";
import { InformationBox } from "./InformationBox";
import { WeatherBox } from "./WeatherBox";
import { useSelectedBetshop } from "../../hooks.ts/useSelectedBetshop";

interface SidebarProps {
  betshops: Betshop[];
}

export const Sidebar: React.FC<SidebarProps> = ({ betshops }) => {
  const [show, setShow] = useState<boolean>(false);
  const { betshopId } = useSelectedBetshop();
  const clickedBetshop = betshops?.filter((b) => b.id === betshopId)[0];

  useEffect(() => {
    setShow(!!clickedBetshop);
  }, [clickedBetshop]);

  return (
    <div
      className={`sidebar relative drop-shadow-md w-[215px] h-screen py-[22px] px-[18px] bg-white ${
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
      {clickedBetshop && (
        <div className="flex flex-col gap-y-[15px] h-full overflow-hidden">
          <InformationBox betshop={clickedBetshop} />
          <WeatherBox
            lat={clickedBetshop?.location.lat}
            lng={clickedBetshop?.location.lng}
          />
        </div>
      )}
    </div>
  );
};
