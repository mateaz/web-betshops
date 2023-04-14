import React, { PropsWithChildren } from "react";

export const Box: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-row">{children}</div>;
};
