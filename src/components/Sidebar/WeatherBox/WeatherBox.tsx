import React, { useEffect, useState } from "react";
import { getWeather } from "../../../lib/weatherService";
import { WeatherDataItem } from "../../../types/weather";
import { WeatherCards } from "./WeatherCards";
import { LoadingSpinner } from "../../shared/LoadingSpinner";
import { groupWeatherDataByDay } from "../../../utils/getGroupedWeatherData";

interface WeatherBoxProps {
  lat: number;
  lng: number;
}

export const WeatherBox: React.FC<WeatherBoxProps> = ({ lat, lng }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataItem[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (lat && lng) {
      getWeather(lat, lng)
        .then((response) => {
          setWeatherData(groupWeatherDataByDay(response.data.list));
          setError(false);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  }, [lat, lng]);

  if (loading) return <LoadingSpinner text="Weather data is loading..." />;
  return (
    <div className="w-full overflow-y-auto h-full bg-white py-4">
      {error && (
        <div className="italic text-red">
          Something went wrong. Please try again!
        </div>
      )}
      {weatherData && (
        <>
          <h3 className="text-darkgrey font-medium">Weather</h3>
          <WeatherCards weatherData={weatherData} />
        </>
      )}
    </div>
  );
};
