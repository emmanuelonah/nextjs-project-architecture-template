import { useState, useCallback } from 'react';

interface CookieOptions {
  days?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: 'None' | 'Lax' | 'Strict';
}

const isBrowser = typeof window !== 'undefined';
const A_DAY_MILLISECONDS = 864e5;

/**
 * @stringifyOptions function takes in a `CookieOptions` object and returns a string
 * representation of the options.
 * @param {CookieOptions} options - The `options` parameter is an object that contains the following
 * properties:
 * @returns a string that represents the options for a cookie.
 */
function stringifyOptions(options: CookieOptions) {
  let result = '';

  result += options.path ? `; path=${options.path}` : '';
  result += options.domain ? `; domain=${options.domain}` : '';
  result += options.secure ? '; secure' : '';
  result += options.sameSite ? `; sameSite=${options.sameSite}` : '';

  return result;
}

/**
 * @setCookie function sets a cookie with the given name and value, along with optional options.
 * @param {string} name - The name parameter is a string that represents the name of the cookie. It is
 * used to identify the cookie when retrieving or deleting it.
 * @param {string} value - The `value` parameter is a string that represents the value to be stored in
 * the cookie.
 * @param {CookieOptions} [options] - The `options` parameter is an optional object that can contain
 * additional settings for the cookie. It has the following properties:
 * @returns The function does not have a return statement, so it does not return anything.
 */
function setCookie(name: string, value: string, options?: CookieOptions) {
  if (!isBrowser) return;

  const optionsWithDefaults = { days: 7, path: '/', ...options };
  const expires = new Date(Date.now() + optionsWithDefaults.days * A_DAY_MILLISECONDS).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}${stringifyOptions(optionsWithDefaults)}`;
}

/**
 * @getCookie function retrieves the value of a cookie with a given name from the browser's
 * cookies, or returns an initial value if the cookie is not found.
 * @param {string} name - The `name` parameter is a string that represents the name of the cookie you
 * want to retrieve.
 * @param [initialValue] - The `initialValue` parameter is an optional parameter that specifies the
 * default value to be returned if the cookie with the given name is not found. If no `initialValue` is
 * provided, it defaults to an empty string (`''`).
 * @returns the value of the cookie with the specified name if it exists, otherwise it returns the
 * initial value provided.
 */
function getCookie(name: string, initialValue = '') {
  if (!isBrowser) return initialValue;

  const cookies = document.cookie.split('; ');
  const cookie = cookies.find((c) => c.split('=')[0] === name);

  if (cookie) return decodeURIComponent(cookie.split('=')[1]);

  return initialValue;
}

/**
 * @deleteCookie function is used to delete a cookie by setting its expiration date to a past
 * date.
 * @param {string} name - The name of the cookie that you want to delete.
 * @param [path=/] - The `path` parameter is optional and it specifies the path of the cookie. By
 * default, it is set to `'/'`, which means the cookie is accessible on all pages of the website. If
 * you want to restrict the cookie to a specific path, you can provide the desired path as a string
 */
function deleteCookie(name: string, path = '/') {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
}

/**
 * @useCookies function is a custom hook that allows you to manage cookies by
 * providing methods to update and delete a cookie item.
 * @param {string} key - The key parameter is a string that represents the name of the cookie. It is
 * used to identify the cookie when getting, setting, or deleting it.
 * @param {string} [initialValue] - The `initialValue` parameter is an optional parameter that
 * specifies the initial value for the cookie. If no initial value is provided, the `getCookie`
 * function will be called to retrieve the value of the cookie with the specified key.
 * @returns The function `useCookies` returns an object with three properties: `item`, `updateItem`,
 * and `deleteItem`.
 */
function useCookies(key: string, initialValue?: string) {
  const [item, setItem] = useState(() => getCookie(key, initialValue));

  const updateItem = useCallback(
    (value: string, options: CookieOptions) => {
      setItem(value);
      setCookie(key, value, options);
    },
    [key]
  );

  const deleteItem = useCallback(() => deleteCookie(key), [key]);

  return { item, updateItem, deleteItem };
}

export { stringifyOptions, setCookie, getCookie, useCookies };
