import React from "react";
import { DetailsRow } from "./detailsRow";
import { locationImg } from "../../utils/constants";
import { ImgContainer } from "../imgContainer";

import { DetailsContainer } from "./detailsContainer";
import { OpenHours } from "./openHours";

interface InformationCardProps {
  name: string;
  address: string;
  city: string;
  county: string;
}

export const InformationCard: React.FC<InformationCardProps> = ({
  name,
  address,
  city,
  county,
}) => {
  const cityCounty: string = `${city} - ${county} `;

  return (
    <div className="bg-white">
      <DetailsContainer>
        <ImgContainer imgUrl={locationImg} imgAlt="Betshop's address" />
        <div>
          {name && <DetailsRow text={name} />}
          {address && <DetailsRow text={address} />}
          {cityCounty && <DetailsRow text={cityCounty} />}
        </div>
      </DetailsContainer>
      <div className="flex flex-row justify-start">
        <OpenHours />
      </div>
    </div>
  );
};
