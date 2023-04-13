import React, { PropsWithChildren } from "react";

export const DetailsContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-row justify-between">{children}</div>;
};
