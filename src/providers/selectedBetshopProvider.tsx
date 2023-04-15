import React, { PropsWithChildren } from "react";

export interface BetshopState {
  betshopId?: number;
  setBetshopId?: any;
}

export const BetshopContext = React.createContext<BetshopState>(null);
export const BetshopContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedBetshop, setSelectedBetshop] = React.useState();

  return (
    <BetshopContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        betshopId: selectedBetshop,
        setBetshopId: setSelectedBetshop,
      }}
    >
      {children}
    </BetshopContext.Provider>
  );
};
