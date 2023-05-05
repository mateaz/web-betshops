import React from "react";

interface IconContainerProps {
  imgUrl: string;
  imgAlt: string;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  imgUrl,
  imgAlt,
}) => {
  return <img src={imgUrl} alt={imgAlt} className="h-fit w-fit " />;
};
