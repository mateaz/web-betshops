import React from "react";
import { InformationCard } from "./informationCard";
import { MyContext } from "../../providers/blabla";
import { Betshop } from "../../types/betshop";
import { WeatherBox } from "./weatherBox";

interface SidebarProps {
  betshops: Betshop[];
}

export const Sidebar: React.FC<SidebarProps> = ({ betshops }) => {
  const { data } = React.useContext(MyContext);
  const clickedBetshop = betshops.filter((b) => b.id === data)[0];

  return (
    <div className="w-[215px] h-screen py-[22px] px-[18px] bg-white">
      <div className="flex flex-col gap-y-[15px] h-full overflow-hidden">
        {clickedBetshop ? (
          <>
            <InformationCard betshop={clickedBetshop} />
            <WeatherBox
              lat={clickedBetshop?.location.lat}
              lng={clickedBetshop?.location.lng}
            />
          </>
        ) : (
          <p>Click on betshop icon to get informations about working hours</p> // daj stil
        )}
      </div>
    </div>
  );
};
