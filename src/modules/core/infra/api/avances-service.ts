import axios from "axios";

export const evaluationApi = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

evaluationApi.interceptors.request.use((config) => {
  //   const token = getFromLocalStorage('token')

  //   config.headers.Authorization = `Bearer ${token}`

  return config;
});
