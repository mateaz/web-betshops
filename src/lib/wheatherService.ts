import axios from "axios";

const apiKey = "f7d9dff7bcc458017ecdd7ccea0ddd00";
const baseURL = "https://api.openweathermap.org/data/2.5";

const apiCall = axios.create({
  baseURL,
});

export const getWeather = (lat: number, long: number) => {
  return apiCall.get(
    `/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`,
  );
};
