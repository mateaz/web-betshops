import React, { PropsWithChildren } from "react";

export interface Lalastate {
  data?: any;
  setData?: any;
}

export const MyContext = React.createContext<Lalastate>({
  data: null,
  setData: null,
});
export const MyContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] = React.useState();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};
