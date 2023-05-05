import axios from "axios";

export const getWeather = (lat: number, long: number) => {
  return axios.get("http://localhost:8000", {
    params: {
      lat,
      long,
    },
  });
};
