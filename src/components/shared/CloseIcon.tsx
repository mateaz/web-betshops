import React from "react";
import { closeHoursImg } from "../../utils/constants";
import { IconContainer } from "./IconContainer";

export const CloseIcon: React.FC = () => {
  return <IconContainer imgUrl={closeHoursImg} imgAlt="close" />;
};
