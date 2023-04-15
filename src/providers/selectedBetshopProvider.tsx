import React, { PropsWithChildren, useMemo } from "react";

export interface BetshopState {
  betshopId?: number;
  setBetshopId?: any;
}

export const BetshopContext = React.createContext<BetshopState>(null);
export const BetshopContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [betshopId, setBetshopId] = React.useState();

  const betshopIdProviderValue = useMemo(
    () => ({ betshopId, setBetshopId }),
    [betshopId, setBetshopId],
  );

  return (
    <BetshopContext.Provider value={betshopIdProviderValue}>
      {children}
    </BetshopContext.Provider>
  );
};
