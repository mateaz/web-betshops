import React from "react";
import { nearMeImg } from "../../utils/constants";
import { IconContainer } from "./IconContainer";

export const NearMeIcon: React.FC = () => {
  return <IconContainer imgUrl={nearMeImg} imgAlt="near me" />;
};
