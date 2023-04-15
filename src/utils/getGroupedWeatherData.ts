import { WeatherDataItem, WeatherDataList } from "../types/weather";

export const groupWeatherDataByDay = (data: WeatherDataList[]) => {
  const transformedData: WeatherDataItem[] = [];

  data.forEach((obj) => {
    const date = obj.dt_txt.slice(0, 10);

    const existingDate = transformedData.find(
      (item: WeatherDataItem) => item.date === date,
    );

    if (!existingDate) {
      const newObj = {
        date,
        weatherDataList: [
          {
            main: obj.main,
            weather: obj.weather,
            clouds: obj.clouds,
            dt_txt: obj.dt_txt,
          },
        ],
      };
      transformedData.push(newObj);
    } else {
      existingDate.weatherDataList.push({
        main: obj.main,
        weather: obj.weather,
        clouds: obj.clouds,
        dt_txt: obj.dt_txt,
      });
    }
  });
  return transformedData;
};
