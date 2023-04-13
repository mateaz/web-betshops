import React from "react";
import { InformationCard } from "./informationCard";
import { MyContext } from "../../providers/blabla";
import { Betshop } from "../../types/betshop";

interface SidebarProps {
  betshops: Betshop[];
}

export const Sidebar: React.FC<SidebarProps> = ({ betshops }) => {
  //  const { selectedBetshopId } = useSelectedBetshop();
  const { data } = React.useContext(MyContext);
  const clickedBetshop = betshops.filter((b) => b.id === data)[0];

  return (
    <div className="w-[215px] flex flex-row py-[22px] pb-[18px]">
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
  );
};
