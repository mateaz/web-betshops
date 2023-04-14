// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";
import React from "react";

interface TemperatureTagProps {
  temperature: number;
}

export const TemperatureTag: React.FC<TemperatureTagProps> = ({
  temperature,
}) => {
  const scales: number[] = [14, 20, 25];

  const tagClassNames = classNames(
    "h-fit w-15 text-white px-1 text-xxs font-medium",
    {
      "bg-blue": temperature < scales[0],
      green: temperature >= scales[0] && temperature < scales[1],
      orange: temperature >= scales[1] && temperature < scales[2],
      "bg-red": temperature >= scales[2],
    },
  );

  return <div className={tagClassNames}>{`${temperature}C`}</div>;
};
