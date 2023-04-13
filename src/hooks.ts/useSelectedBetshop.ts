import React from "react";
import { SelectedBetshopContext } from "../providers/selectedBetshopProvider";

export const useSelectedBetshop = () => {
  const selectedBetshop = React.useContext(SelectedBetshopContext);
  return selectedBetshop;
};
