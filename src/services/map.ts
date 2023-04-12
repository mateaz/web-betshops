import axios from "axios";

const superologyBaseURL = "https://interview.superology.dev"; // mozd aizbaciti van

const apiCall = axios.create({
  baseURL: superologyBaseURL,
});

export const getBetShops = (bbox: any) => {
  return apiCall.get(`/betshops?boundingBox=${bbox}`);
};
