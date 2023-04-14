import React from "react";
import { InformationCard } from "./informationCard";
import { MyContext } from "../../providers/blabla";
import { Betshop } from "../../types/betshop";
import { WeatherCard } from "./weatherCard";

interface SidebarProps {
  betshops: Betshop[];
}

export const Sidebar: React.FC<SidebarProps> = ({ betshops }) => {
  //  const { selectedBetshopId } = useSelectedBetshop();
  const { data } = React.useContext(MyContext);
  const clickedBetshop = betshops.filter((b) => b.id === data)[0];

  return (
    <div className="w-[215px] flex flex-row flex-wrap py-[22px] pb-[18px] gap-y-[15px]">
      <div className="h-1/3	basis-full">
        {clickedBetshop ? (
          <InformationCard
            name={clickedBetshop?.name}
            address={clickedBetshop?.address}
            county={clickedBetshop?.county}
            city={clickedBetshop?.city}
          />
        ) : (
          <p>Click on betshop icon to get informations about working hours</p>
        )}
      </div>
      <WeatherCard
        lat={clickedBetshop?.location.lat}
        lng={clickedBetshop?.location.lng}
      />
    </div>
  );
};
