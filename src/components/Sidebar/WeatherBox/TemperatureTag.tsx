import classNames from "classnames";
import React from "react";
import { temperatureScales } from "../../../utils/constants";

interface TemperatureTagProps {
  temperature: number;
}

export const TemperatureTag: React.FC<TemperatureTagProps> = ({
  temperature,
}) => {
  const tagClassNames = classNames(
    "h-fit w-9 text-white px-1 text-xxs font-medium text-center",
    {
      "bg-blue": temperature < temperatureScales[0],
      "bg-green":
        temperature >= temperatureScales[0] &&
        temperature < temperatureScales[1],
      "bg-orange":
        temperature >= temperatureScales[1] &&
        temperature < temperatureScales[2],
      "bg-red": temperature >= temperatureScales[2],
    },
  );

  return <div className={tagClassNames}>{`${temperature.toFixed(1)}C`}</div>;
};
