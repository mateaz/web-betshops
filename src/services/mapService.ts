import axios from "axios";

const superologyBaseURL = "https://interview.superology.dev"; // mozda izbaciti van

const apiCall = axios.create({
  baseURL: superologyBaseURL,
});

export const getBetShops = (bbox: number[]) => {
  return apiCall.get(`/betshops?boundingBox=${bbox}`);
};
