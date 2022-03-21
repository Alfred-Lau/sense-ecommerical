import Axios, { AxiosRequestConfig } from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:7001",
  timeout: 3000,
});

function request(url: string, options?: Partial<AxiosRequestConfig>) {
  return axios.request({
    method: options?.method || "GET",
    ...options,
  });
}

export default request;
