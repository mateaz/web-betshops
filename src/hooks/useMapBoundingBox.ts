import React from "react";
import { MapBoundingBoxContext } from "../providers/mapBoundingBoxProvider";

export const useMapBoundingBox = () => {
  const mapBoundingBox = React.useContext(MapBoundingBoxContext);
  return mapBoundingBox;
};
