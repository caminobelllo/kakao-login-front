import axios from "axios";

const api_base_url = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: api_base_url,
});
