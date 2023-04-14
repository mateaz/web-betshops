import React from "react";
import {
  endOpenHour,
  isBetshopOpen,
  startOpenHour,
} from "../../utils/getOpeningTime";
import { ImgContainer } from "../imgContainer";
import { closeHoursImg, openHoursImg } from "../../utils/constants";
import { DetailsContainer } from "./detailsContainer";
import { DetailsRow } from "./detailsRow";

export const OpenHours: React.FC = () => {
  let imgURL: string = "";
  let text: string = "";

  switch (isBetshopOpen()) {
    case true:
      imgURL = openHoursImg;
      text = `Open now until ${endOpenHour}`;
      break;
    case false:
      imgURL = closeHoursImg;
      text = `Opens tomorrow at ${startOpenHour}`;
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-row justify-between">
      <DetailsContainer>
        <ImgContainer imgUrl={imgURL} imgAlt="Betshop is open" />
        <DetailsRow text={text} />
      </DetailsContainer>
    </div>
  );
};
