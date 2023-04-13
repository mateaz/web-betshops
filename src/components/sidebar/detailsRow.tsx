import React from "react";

interface DetailsRowProps {
  text: string;
}

export const DetailsRow: React.FC<DetailsRowProps> = ({ text }) => {
  return <p className="text-darkgrey text-left">{text}</p>;
};
