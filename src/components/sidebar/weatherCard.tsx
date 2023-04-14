import React, { useEffect, useState } from "react";
import { getWheather } from "../../lib/wheatherService";
import { WeatherData, WeatherDataItem } from "../../types/weather";
import { TemperatureTag } from "./temperatureTag";

interface WheaterCardProps {
  lat: number;
  lng: number;
}

const makeDatabeatutiful = (data: WeatherData[]) => {
  return data.map(({ dt_txt, main, weather, clouds }) => ({
    dt_txt,
    main,
    weather,
    clouds,
  }));
};

export const WeatherCard: React.FC<WheaterCardProps> = ({ lat, lng }) => {
  const [weather, setWeather] = useState<WeatherDataItem[]>();

  useEffect(() => {
    if (lat && lng) {
      getWheather(lat, lng).then((response) => {
        //    console.log(response.data.list);
        setWeather(makeDatabeatutiful(response.data.list));
        // setWeather(response.data.list);
      });
    }
  }, [lat, lng]);

  useEffect(() => {
    if (weather) {
      console.log(weather);
    }
  }, [weather]);

  return (
    <div className="h-2/3 basis-full">
      <TemperatureTag temperature={508} />
    </div>
  );
};
