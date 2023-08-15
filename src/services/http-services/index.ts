import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { throwError } from 'utils';
import { getCookie } from 'hooks';

const TOKEN_STORAGE_KEY = 'token';
const NO_TOKEN = '';

class HttpService {
  private _axiosService: AxiosInstance;

  /**
   * @constructor creates an instance of the axios HTTP service with a base URL and headers,
   * and adds a request middleware if the authRequest parameter is true.
   * @param [authRequest=true] - The `authRequest` parameter is a boolean value that determines whether
   * or not to include authentication middleware for the HTTP requests made by the `_axiosService`
   * instance. If `authRequest` is `true`, the `requestMiddleware()` method will be called to add the
   * necessary authentication logic. If
   */
  constructor(authRequest = true) {
    this._axiosService = axios.create({
      baseURL: process.env.SERVICE_DEY_SERVER_URL,
      headers: { 'Content-Type': 'application/json' },
    });

    if (authRequest) this.requestMiddleware();
  }

  /**
   * @validateToken static method checks if a token is provided and throws an error if it is missing.
   * @param {string} token - The `token` parameter is a string that represents a token value.
   */
  private static validateToken(token: string) {
    if (!token) throwError('MissingTokenError', 'token must be provided', HttpService.validateToken);
  }

  /**
   * @requestMiddleware private-method adds an authorization token to the request headers before sending
   * the request.
   * @returns The `appendAuthorizationToRequest` function is returning the `config` object with the
   * `Authorization` header appended to it.
   */
  private requestMiddleware() {
    this._axiosService.interceptors.request.use(
      function appendAuthorizationToRequest(config) {
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

  /**
   * @httpGetRequest public method is an asynchronous HTTP GET request that returns a Promise with the
   * response data or rejects with an error.
   * @param {string} url - The `url` parameter is a string that represents the URL of the HTTP request.
   * It specifies the location of the resource that you want to retrieve or interact with.
   * @param [config] - The `config` parameter is an optional object that can be used to configure the
   * HTTP request. It can include properties such as headers, query parameters, request timeout,
   * authentication credentials, etc. The specific properties and their values depend on the HTTP client
   * library being used (in this case, Axios).
   */
  public async httpGetRequest<ResponseType = Record<string, any>, C = any>(
    url: string,
    config?: AxiosRequestConfig<C>
  ) {
    return this._axiosService.get<ResponseType>(url, config);
  }

  /**
   * @httpPostRequest public method is an asynchronous HTTP POST request that sends data to a specified URL and returns a
   * promise that resolves with the response or rejects with an error.
   * @param {string} url - The URL where the HTTP POST request will be sent.
   * @param {D} data - The `data` parameter is the payload that you want to send in the HTTP POST
   * request. It is of type `D`, which is a generic type that represents a record of string key-value
   * pairs.
   * @param [config] - The `config` parameter is an optional object that allows you to customize the
   * Axios request configuration. It can include properties such as headers, timeout, authentication, and
   * more. The type of the `config` parameter is `AxiosRequestConfig`, which is a generic type that
   * allows you to specify the
   */
  public async httpPostRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    return this._axiosService.post<ResponseType>(url, data, config);
  }

  /**
   * @httpPutRequest public method is an asynchronous HTTP PUT request that sends data to a specified URL and returns a
   * promise that resolves with the response or rejects with an error.
   * @param {string} url - The URL of the HTTP endpoint you want to send the PUT request to.
   * @param {D} data - The `data` parameter is the payload that you want to send in the HTTP PUT request.
   * It is of type `D`, which is a generic type that represents a record of string keys and string
   * values. This means that the keys and values in the payload can be any string.
   * @param [config] - The `config` parameter is an optional object that allows you to customize the
   * request configuration. It can include properties such as headers, timeout, authentication, and more.
   * The type of the `config` parameter is `AxiosRequestConfig`, which is a generic type that allows you
   * to specify the type
   */
  public async httpPutRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    return this._axiosService.put<ResponseType>(url, data, config);
  }

  /**
   * @httpPatchRequest public method is an asynchronous HTTP PATCH request that sends data to a specified URL and returns a
   * promise that resolves with the response or rejects with an error.
   * @param {string} url - The URL of the API endpoint you want to send the PATCH request to.
   * @param {D} data - The `data` parameter is of type `D`, which is a generic type representing a record
   * of string keys and string values. It is used to provide the data to be sent in the HTTP PATCH
   * request.
   * @param [config] - The `config` parameter is an optional object that allows you to customize the
   * Axios request configuration. It can include properties such as headers, timeout, authentication, and
   * more. The type of the `config` parameter is `AxiosRequestConfig`, which is a generic type that
   * allows you to specify the
   */
  public async httpPatchRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    return this._axiosService.patch<ResponseType>(url, data, config);
  }

  /**
   * @httpDeleteRequest public method is an asynchronous HTTP DELETE request that sends a request to a specified URL and
   * returns a promise that resolves with the response data or rejects with an error.
   * @param {string} url - The URL of the HTTP request that you want to send. It specifies the location
   * of the resource you want to interact with.
   * @param [config] - The `config` parameter is an optional object that can be used to configure the
   * HTTP request. It can include properties such as headers, query parameters, request body,
   * authentication credentials, etc.
   */
  public async httpDeleteRequest<ResponseType = any, C = any>(url: string, config?: AxiosRequestConfig<C>) {
    return this._axiosService.delete<ResponseType>(url, config);
  }
}

/**
 * @publicHttpServices creates an instance of the `HttpService` class and assigns it to
 *  the variable ``. The `false` parameter passed to the `HttpService` constructor
 * indicates that the instance should not include authentication middleware
 * for the HTTP requests made by the `_httpService` instance.
 *
 * @Note this is to be used for public endpoints that do not requires authorization
 */
const publicHttpServices = new HttpService(false);

/**
 * @privateHttpServices creates an instance of the `HttpService` class and assigns it to the variable
 * `privateHttpServices`. This instance includes authentication middleware for the HTTP requests made
 * by the `_httpService` instance. It can be used for private endpoints that require authorization.
 *
 * @Note this is to be used for private endpoints that requires authorization
 */
const privateHttpServices = new HttpService();

export { publicHttpServices, privateHttpServices };
