import React from "react";
import { InformationCard } from "./informationCard";
import { MyContext } from "../../providers/blabla";
import { Betshop } from "../../types/betshop";
import { WeatherBox } from "./weatherBox";

interface SidebarProps {
  betshops: Betshop[];
}

export const Sidebar: React.FC<SidebarProps> = ({ betshops }) => {
  //  const { selectedBetshopId } = useSelectedBetshop();
  const { data } = React.useContext(MyContext);
  const clickedBetshop = betshops.filter((b) => b.id === data)[0];

  return (
    <div className="w-[215px] flex flex-row flex-wrap gap-y-[15px] py-[22px] px-[18px] bg-white h-full overflow-hidden">
      <div className="basis-full bg-white">
        {clickedBetshop ? (
          <InformationCard betshop={clickedBetshop} />
        ) : (
          <p>Click on betshop icon to get informations about working hours</p>
        )}
      </div>
      <WeatherBox
        lat={clickedBetshop?.location.lat}
        lng={clickedBetshop?.location.lng}
      />
    </div>
  );
};
