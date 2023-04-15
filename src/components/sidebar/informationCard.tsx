import React from "react";
import { OpenHours } from "./openHours";
import { Betshop } from "../../types/betshop";
import { BetshopDetails } from "./betshopDetails";

interface InformationCardProps {
  betshop: Betshop;
}

export const InformationCard: React.FC<InformationCardProps> = ({
  betshop,
}) => {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-y-2 h-[130px]">
      <BetshopDetails betshopDetails={betshop} />
      <OpenHours />
    </div>
  );
};
