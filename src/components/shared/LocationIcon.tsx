import React from "react";
import { locationImg } from "../../utils/constants";
import { IconContainer } from "./IconContainer";

export const LocationIcon: React.FC = () => {
  return <IconContainer imgUrl={locationImg} imgAlt="Betshop's address" />;
};
