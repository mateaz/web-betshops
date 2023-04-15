import axios from "axios";

const baseURL = "https://interview.superology.dev";

const apiCall = axios.create({
  baseURL,
});

export const getBetshops = (bbox: number[]) => {
  return apiCall.get(`/betshops?boundingBox=${bbox}`);
};
