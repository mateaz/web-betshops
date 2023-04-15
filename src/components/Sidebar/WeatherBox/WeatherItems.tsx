import React from "react";
import { TemperatureTag } from "./TemperatureTag";

interface WeatherItemsProps {
  hours: string;
  cloudsPressure: string;
  description: string;
  tempMax: number;
  tempMin: number;
}

export const WeatherItems: React.FC<WeatherItemsProps> = ({
  hours,
  cloudsPressure,
  description,
  tempMax,
  tempMin,
}) => {
  return (
    <div className="text-left flex flex-row justify-between py-1 pl-1">
      <div>
        <p>{hours}</p>
        <p>{description}</p>
        <p>
          <span className="font-medium">clouds: </span>
          {cloudsPressure}
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-end pt-1 w-min">
        <TemperatureTag temperature={tempMax} />
        <TemperatureTag temperature={tempMin} />
      </div>
    </div>
  );
};
