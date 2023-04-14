import React from "react";
import { TemperatureTag } from "./temperatureTag";

interface WeatherCardsProps {
  date: string;
  cloudsPressure: string;
  description: string;
  tempMax: number;
  tempMin: number;
  today: boolean;
  index: number;
}

export const WeatherCards: React.FC<WeatherCardsProps> = ({
  date,
  cloudsPressure,
  description,
  tempMax,
  tempMin,
  today,
  index,
}) => {
  const activeCard = index === 0 ? "border-l-4 border-blue" : null;
  const odd = index % 2 !== 1 ? "bg-bggrey" : null;
  return (
    <div
      className={`text-darkgrey text-xs text-left flex flex-row justify-between px-1 py-1 ${activeCard} ${odd} `}
    >
      <div>
        <p>
          <span className="font-medium">{date}</span>
          {today ? <span className="italic">(today)</span> : null}
        </p>
        <p>
          <span className="font-medium">clouds: </span>
          {cloudsPressure}
        </p>
        <p>{description}</p>
      </div>
      <div className="flex flex-row w-fit flex-wrap justify-end  pt-4 h-fit">
        <TemperatureTag temperature={tempMax} />
        <TemperatureTag temperature={tempMin} />
      </div>
    </div>
  );
};
