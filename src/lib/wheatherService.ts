import axios /* , { AxiosResponse  } */ from "axios";
// import { Betshop } from "../types/betshop";
const apiKey = "f7d9dff7bcc458017ecdd7ccea0ddd00";
const wheatherBaseURL = "https://api.openweathermap.org/data/2.5"; // mozda izbaciti van

const apiCall = axios.create({
  baseURL: wheatherBaseURL,
});

export const getWheather = (lat: number, long: number) => {
  // staviti type
  return apiCall.get(
    `/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`,
  );
};
