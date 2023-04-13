import axios /* , { AxiosResponse  } */ from "axios";
// import { Betshop } from "../types/betshop";

const superologyBaseURL = "https://interview.superology.dev"; // mozda izbaciti van

const apiCall = axios.create({
  baseURL: superologyBaseURL,
});

export const getBetShops = (bbox: number[]) => {
  // staviti type
  return apiCall.get(`/betshops?boundingBox=${bbox}`);
};
