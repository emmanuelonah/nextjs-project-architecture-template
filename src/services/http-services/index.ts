import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { throwError } from 'utils';
import { getCookie } from 'hooks';

const TOKEN_STORAGE_KEY = 'token';
const NO_TOKEN = '';

class HttpService {
  __httpService__: AxiosInstance;

  constructor(authRequest = true) {
    this.__httpService__ = axios.create({
      baseURL: process.env.YOUR_PROJECT_NAME_HERE_SERVER_URL,
      headers: { 'Content-Type': 'application/json' },
    });

    if (authRequest) this.requestMiddleware();
  }

  private static validateToken(token: string) {
    if (!token) throwError('MissingTokenError', 'token must be provided', HttpService.validateToken);
  }

  private requestMiddleware() {
    this.__httpService__.interceptors.request.use(
      async function appendAuthorizationToRequest(config) {
        const token = getCookie(TOKEN_STORAGE_KEY, NO_TOKEN);

        HttpService.validateToken(token);

        config.headers!.Authorization = `Bearer ${token}`;

        return config;
      },
      function (error: Error) {
        return Promise.reject(error);
      }
    );
  }

  public async httpGetRequest<ResponseType = Record<string, any>, C = any>(
    url: string,
    config?: AxiosRequestConfig<C>
  ) {
    const response = await this.__httpService__.get<ResponseType>(url, config);

    return response;
  }

  public async httpPostRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    const response = await this.__httpService__.post<ResponseType>(url, data, config);

    return response;
  }

  public async httpPutRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    const response = await this.__httpService__.put<ResponseType>(url, data, config);

    return response;
  }

  public async httpPatchRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    const response = await this.__httpService__.patch<ResponseType>(url, data, config);

    return response;
  }

  public async httpDeleteRequest<ResponseType = any, C = any>(url: string, config?: AxiosRequestConfig<C>) {
    const response = await this.__httpService__.delete<ResponseType>(url, config);

    return response;
  }
}

/**
 * @$httpServices to be used for public endpoints
 * that do not requires authorization
 */
const $httpServices = new HttpService(false);

/**
 * @_httpServices to be used for private endpoints
 * that requires authorization
 */
const _httpServices = new HttpService();

export { $httpServices, _httpServices };
