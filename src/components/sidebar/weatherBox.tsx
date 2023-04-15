import React, { useEffect, useState } from "react";
import { getWheather } from "../../lib/wheatherService";
import { WeatherDataItem } from "../../types/weather";

import { WeatherCards } from "./weatherCards";
import { LoadingSpinner } from "./loadingSpinner";
import { groupWeatherDataByDay } from "../../utils/getGroupedWeatherData";

interface WeatherBoxProps {
  lat: number;
  lng: number;
}
export const WeatherBox: React.FC<WeatherBoxProps> = ({ lat, lng }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataItem[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (lat && lng) {
      getWheather(lat, lng)
        .then((response) =>
          setWeatherData(groupWeatherDataByDay(response.data.list)),
        )
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
  }, [lat, lng]);

  if (loading) return <LoadingSpinner text="Weather data is loading..." />;
  return (
    <div className="w-full overflow-y-auto h-full">
      <h3 className="text-darkgrey font-medium">Weather</h3>
      <WeatherCards weatherData={weatherData} />
    </div>
  );
};
