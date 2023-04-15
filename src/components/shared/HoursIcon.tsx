import React from "react";
import { openHoursImg } from "../../utils/constants";
import { IconContainer } from "./IconContainer";

export const HoursIcon: React.FC = () => {
  return <IconContainer imgUrl={openHoursImg} imgAlt="open" />;
};
