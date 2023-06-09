import React from "react";

interface DetailsRowProps {
  text: string;
}

export const DetailsRow: React.FC<DetailsRowProps> = ({ text }) => {
  return (
    <p className="text-darkgrey text-left text-xs md:text-sm pl-2">{text}</p>
  );
};
