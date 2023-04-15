import { WeatherDataItem, WeatherDataList } from "../types/weather";

export const groupWeatherDataByDay = (data: WeatherDataList[]) => {
  const transformedData: WeatherDataItem[] = [];

  // Iterate through each object in the data array
  data.forEach((obj) => {
    // Extract the date from the dt_txt property
    const date = obj.dt_txt.slice(0, 10);

    // Check if the date already exists in transformedData
    const existingDate = transformedData.find(
      (item: WeatherDataItem) => item.date === date,
    );

    // If the date doesn't exist, create a new object and add it to transformedData
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
      // If the date already exists, add the object to the existing data array
      existingDate.weatherDataList.push({
        main: obj.main,
        weather: obj.weather,
        clouds: obj.clouds,
        dt_txt: obj.dt_txt,
      });
    }
  });
  // console.log(transformedData);
  return transformedData;
};
