import React from "react";
import { BetshopContext } from "../providers/selectedBetshopProvider";

export const useSelectedBetshop = () => {
  const selectedBetshop = React.useContext(BetshopContext);
  return selectedBetshop;
};
