import React, { useEffect, useState } from "react";
import { getWheather } from "../../lib/wheatherService";
import { WeatherData, WeatherDataItem } from "../../types/weather";
import { WeatherCards } from "./weatherCards";
import {
  convertDate,
  getHoursFromDate,
  isDateToday,
} from "../../utils/convertDate";

interface WeatherBoxProps {
  lat: number;
  lng: number;
}

const transformWeatherData = (data: WeatherData[]) => {
  // rename
  return data.map(({ dt_txt, main, weather, clouds }) => ({
    dt_txt,
    main,
    weather,
    clouds,
  }));
};

export const WeatherBox: React.FC<WeatherBoxProps> = ({ lat, lng }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataItem[]>();

  useEffect(() => {
    if (lat && lng) {
      getWheather(lat, lng).then((response) => {
        setWeatherData(transformWeatherData(response.data.list));
      });
    }
  }, [lat, lng]);

  return (
    <div className="basis-full h-fit">
      <h3 className="text-darkgrey font-medium">Weather</h3>
      <div className="overflow-y-auto h-full">
        {weatherData?.map(({ dt_txt, weather, main, clouds }, index) => {
          const today = isDateToday(dt_txt);
          const date = `${convertDate(dt_txt)} at ${getHoursFromDate(dt_txt)} `;
          const cloudsPressure = `${clouds?.all}%, ${main.pressure} hpa`;

          return (
            <WeatherCards
              index={index}
              key={dt_txt}
              date={date}
              today={today}
              cloudsPressure={cloudsPressure}
              tempMax={main.temp_max}
              tempMin={main.temp_min}
              description={weather[0].description}
            />
          );
        })}
      </div>
    </div>
  );
};
