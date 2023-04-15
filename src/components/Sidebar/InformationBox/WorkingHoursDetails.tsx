import React from "react";
import {
  endOpenHour,
  isBetshopOpen,
  startOpenHour,
} from "../../../utils/getOpeningTime";
import { Box } from "../../shared/Box";
import { DetailsRow } from "../../shared/DetailsRow";
import { HoursIcon } from "../../shared/HoursIcon";
import { CloseIcon } from "../../shared/CloseIcon";

export const WorkingHoursDetails: React.FC = () => {
  if (isBetshopOpen())
    return (
      <Box>
        <CloseIcon /> <DetailsRow text={`Open now until ${endOpenHour}`} />
      </Box>
    );
  return (
    <Box>
      <HoursIcon />
      <DetailsRow text={`Opens tomorrow at ${startOpenHour}`} />
    </Box>
  );
};
