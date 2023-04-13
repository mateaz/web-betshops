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
  return (
    <div className="flex flex-row justify-between">
      {isBetshopOpen() ? (
        <DetailsContainer>
          <ImgContainer imgUrl={openHoursImg} imgAlt="Betshop is open" />
          <DetailsRow text={`Open now until ${endOpenHour}`} />
        </DetailsContainer>
      ) : (
        <DetailsContainer>
          <ImgContainer imgUrl={closeHoursImg} imgAlt="Betshop is closed" />
          <DetailsRow text={`Opens tomorrow at ${startOpenHour}`} />
        </DetailsContainer>
      )}
    </div>
  );
};
