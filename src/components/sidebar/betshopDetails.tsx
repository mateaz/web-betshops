import React from "react";
import { Box } from "./box";
import { ImgContainer } from "../imgContainer";
import { locationImg } from "../../utils/constants";
import { DetailsRow } from "./detailsRow";
import { Betshop } from "../../types/betshop";

interface BetshopDetailsProps {
  betshopDetails: Betshop;
}

export const BetshopDetails: React.FC<BetshopDetailsProps> = ({
  betshopDetails,
}) => {
  const { name, address, city, county } = betshopDetails;
  const cityCounty: string = `${city} - ${county} `;

  return (
    <Box>
      <ImgContainer imgUrl={locationImg} imgAlt="Betshop's address" />
      <div>
        {name && <DetailsRow text={name} />}
        {address && <DetailsRow text={address} />}
        {cityCounty && <DetailsRow text={cityCounty} />}
      </div>
    </Box>
  );
};
