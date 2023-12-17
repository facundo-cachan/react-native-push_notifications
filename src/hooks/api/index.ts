import axios from 'axios';

import type {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

type Interceptor = {
  request: AxiosInterceptorManager<InternalAxiosRequestConfig<any>>;
  response: AxiosInterceptorManager<AxiosResponse<any, any>>;
}
export enum Environment {
  'localhost'
}
export const DEFAULT_ENV = Environment.localhost
export const message = 'notification { type message }';

const getBaseUrl = (env: Environment = DEFAULT_ENV) => {
  switch (env) {
    case Environment.localhost: {
      return 'http://192.168.1.34:8080/'
    }
  }
}

export const apiInstance: AxiosInstance = axios.create({
  method: 'post',
  baseURL: getBaseUrl(),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
const { interceptors }: { interceptors: Interceptor } = apiInstance;

interceptors.request.use(async (config: InternalAxiosRequestConfig<any>) => {
  let accessToken = '';
  const { headers }: { headers: AxiosRequestHeaders } = config;
  headers.Authorization = `Bearer ${accessToken}`;

  return config
});

interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    return data
  },
  (error: unknown) => {
    return Promise.reject(error)
  }
);