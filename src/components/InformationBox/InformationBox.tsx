import React from "react";
import { Betshop } from "../../types/betshop";
import { LocationDetails } from "./LocationDetails";
import { WorkingHoursDetails } from "./WorkingHoursDetails";

interface InformationBoxProps {
  betshop: Betshop;
}

export const InformationBox: React.FC<InformationBoxProps> = ({ betshop }) => {
  return (
    <div className="flex flex-row flex-wrap justify-start h-[130px] w-full">
      <LocationDetails betshop={betshop} />
      <WorkingHoursDetails />
    </div>
  );
};
