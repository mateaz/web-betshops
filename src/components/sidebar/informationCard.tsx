import React from "react";
import { DetailsRow } from "./detailsRow";

interface InformationCardProps {
  name: string;
  address: string;
  county: string;
}

export const InformationCard: React.FC<InformationCardProps> = ({
  name,
  address,
  county,
}) => {
  return (
    <div className="bg-white">
      <div>
        {name && <DetailsRow text={name} />}
        {address && <DetailsRow text={address} />}
        {county && <DetailsRow text={county} />}
      </div>
    </div>
  );
};
