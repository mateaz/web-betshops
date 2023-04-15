import React from "react";
import { Box } from "../../shared/Box";
import { DetailsRow } from "../../shared/DetailsRow";
import { Betshop } from "../../../types/betshop";
import { LocationIcon } from "../../shared/LocationIcon";

interface LocationDetailsProps {
  betshop: Betshop;
}

export const LocationDetails: React.FC<LocationDetailsProps> = ({
  betshop,
}) => {
  const { name, address, city, county } = betshop;
  const cityCounty: string = `${city} - ${county} `;

  return (
    <Box>
      <LocationIcon />
      <div>
        {name && <DetailsRow text={name} />}
        {address && <DetailsRow text={address} />}
        {cityCounty && <DetailsRow text={cityCounty} />}
      </div>
    </Box>
  );
};
