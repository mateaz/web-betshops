import React from "react";

interface ImgContainerProps {
  imgUrl: string;
  imgAlt: string;
}

export const ImgContainer: React.FC<ImgContainerProps> = ({
  imgUrl,
  imgAlt,
}) => {
  return <img src={imgUrl} alt={imgAlt} className="h-fit w-fit" />;
};
