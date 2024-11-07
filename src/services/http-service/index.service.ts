/**
 * @about
 * HTTP Service Facade
 *
 * This class provides a low-level abstraction over the Axios HTTP client,
 * offering a simplified interface for making HTTP requests.
 *
 * Key Features:
 * - Encapsulates Axios configuration and request methods
 * - Supports both authenticated and non-authenticated requests
 * - Provides type-safe methods for common HTTP operations (GET, POST, PUT, PATCH, DELETE)
 *
 * Usage Notes:
 * 1. Replace 'TOKEN_STORAGE_KEY' with your actual token storage mechanism.
 * 2. Update the 'baseURL' in the constructor to point to your API's base URL.
 *    This can be sourced from environment variables or set directly.
 * 3. Customize the error handling and request/response interceptors as needed.
 *
 * @example
 * const privateApi = new HttpService();
 * const publicApi = new HttpService(false);
 *
 * // Making a GET request
 * const data = await privateApi.httpGetRequest<ResponseType>('/endpoint');
 *
 * @template ResponseType - The expected type of the API response
 * @template RequestDataType - The type of data sent in POST, PUT, and PATCH requests
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { throwError } from 'utils';

class HttpService {
  private _axiosService: AxiosInstance;

  constructor(authRequest = true) {
    this._axiosService = axios.create({
      baseURL: process.env.NEXT_PUBLIC_YOUR_PROJECT_NAME_API_BASE_URL,
      headers: { 'Content-Type': 'application/json' },
    });

    if (authRequest) this.requestMiddleware();
  }

  private static validateToken(token: string) {
    if (!token) throwError('MissingTokenError', 'token must be provided', HttpService.validateToken);
  }

  private requestMiddleware() {
    this._axiosService.interceptors.request.use(
      (config) => {
        /**
         * @token is a placeholder for the token value.
         * replace it with your own token retrieval logic.
         *
         * @note if you are using cookies to store the token, you can use the
         * `getCookie` function which we already have a built in for it here `src/hooks/index.ts`
         */
        const token = 'TOKEN_PLACEHOLDER';
        HttpService.validateToken(token);
        config.headers!.Authorization = `Bearer ${token}`;
        return config;
      },
      (error: Error) => Promise.reject(error)
    );
  }

  public httpGetRequest<ResponseType = unknown, C = unknown>(url: string, config?: AxiosRequestConfig<C>) {
    return this._axiosService.get<ResponseType>(url, config);
  }

  public httpPostRequest<Data = Record<string, unknown>, ResponseType = unknown, Config = unknown>(
    url: string,
    data: Data,
    config?: AxiosRequestConfig<Config extends Data ? any : any>
  ) {
    return this._axiosService.post<ResponseType>(url, data, config);
  }

  public httpPutRequest<Data = Record<string, unknown>, ResponseType = unknown, Config = unknown>(
    url: string,
    data: Data,
    config?: AxiosRequestConfig<Config extends Data ? any : any>
  ) {
    return this._axiosService.put<ResponseType>(url, data, config);
  }

  public httpPatchRequest<Data = Record<string, unknown>, ResponseType = unknown, Config = unknown>(
    url: string,
    data: Data,
    config?: AxiosRequestConfig<Config extends Data ? any : any>
  ) {
    return this._axiosService.patch<ResponseType>(url, data, config);
  }

  public httpDeleteRequest<ResponseType = unknown, Config = unknown>(url: string, config?: AxiosRequestConfig<Config>) {
    return this._axiosService.delete<ResponseType>(url, config);
  }
}

const publicHttpServices = new HttpService(false);
const privateHttpServices = new HttpService();

export { publicHttpServices, privateHttpServices };
