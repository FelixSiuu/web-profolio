/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";

declare module "axios" {
  export interface AxiosInstance {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<BaseVo<T>>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<BaseVo<T>>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<BaseVo<T>>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<BaseVo<T>>;
  }
}
const api = axios.create({
  baseURL: `https://api.felixsiu.lol/api/v1`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response 攔截器
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data as any;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          console.error("💥 伺服器內部錯誤 (500)");
          break;
      }
    }
    return Promise.reject(error);
  },
);

export default api;
