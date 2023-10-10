import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const get = (url: string) => {
  return axios.get(BASE_URL + url);
};
