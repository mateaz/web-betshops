import React from "react";
import { WeatherItems } from "./weatherItems";
import {
  convertDate,
  getHoursFromDate,
  isDateToday,
} from "../../utils/convertDate";
import { WeatherDataItem } from "../../types/weather";

interface WeatherCardsProps {
  weatherData: WeatherDataItem[] | undefined;
}

export const WeatherCards: React.FC<WeatherCardsProps> = ({ weatherData }) => {
  return (
    <div>
      {weatherData?.map(({ date, weatherDataList }, index) => {
        const today = isDateToday(date);
        const activeCard = index === 0 ? "border-l-2 border-blue" : null;
        const odd = index % 2 !== 1 ? "bg-bggrey" : null;

        return (
          <div
            key={date}
            className={`text-darkgrey text-xs text-left px-1 py-1 ${activeCard} ${odd} `}
          >
            <p>
              <span className="font-medium">{convertDate(date)}</span>
              {today ? <span className="italic"> (today)</span> : null}
            </p>
            {weatherDataList.map(({ dt_txt, weather, main, clouds }) => {
              const hours = ` at ${getHoursFromDate(dt_txt)} `;
              const cloudsPressure = `${clouds?.all}%, ${main.pressure} hpa`;
              return (
                <WeatherItems
                  key={dt_txt}
                  hours={hours}
                  cloudsPressure={cloudsPressure}
                  tempMax={main.temp_max}
                  tempMin={main.temp_min}
                  description={weather[0].description}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
