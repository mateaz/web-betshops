import React, { PropsWithChildren, useMemo } from "react";

export interface MapBoundingBoxState {
  boundingBox: number[];
  setBoundingBox: any;
}

export const MapBoundingBoxContext =
  React.createContext<MapBoundingBoxState>(null);
export const MapBoundingBoxContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [boundingBox, setBoundingBox] = React.useState();

  const mapBoundingBoxProvider = useMemo(
    () => ({
      boundingBox,
      setBoundingBox,
    }),
    [boundingBox, setBoundingBox],
  );

  return (
    <MapBoundingBoxContext.Provider value={mapBoundingBoxProvider}>
      {children}
    </MapBoundingBoxContext.Provider>
  );
};
