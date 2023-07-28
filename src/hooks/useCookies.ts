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

/**
 * @stringifyOptions used to stringify the setCookies value
 *
 * @param {options: Record<string, any>}
 *
 * @returns string
 */
function stringifyOptions(options: Record<string, any>) {
  return Object.keys(options).reduce((acc, key) => {
    if (key === 'days') return acc;

    if (options[key] === false) return acc;

    if (options[key] === true) return `${acc}; ${key}`;

    return `${acc}; ${key}=${options[key]}`;
  }, '');
}

/**
 * @setCookie used to set cookies
 *
 * @param {name:string}
 * @param {value:string}
 * @param {options?:CookieOptions}
 *
 * @returns void
 */
const A_DAY_MILLISECONDS = 864e5;
function setCookie(name: string, value: string, options?: CookieOptions) {
  if (!isBrowser) return;

  const optionsWithDefaults = { days: 7, path: '/', ...options };
  const expires = new Date(Date.now() + optionsWithDefaults.days * A_DAY_MILLISECONDS).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}${stringifyOptions(optionsWithDefaults)}`;
}

/**
 * @getCookie used to get cookie from the storage
 *
 * @param {name:string}
 * @param {initialValue?:string}
 *
 * @returns any: it can return an object, string, number
 * because we parse it to its original type
 */
function getCookie(name: string, initialValue = '') {
  if (!isBrowser) return initialValue;

  const cookies = document.cookie.split('; ');
  const cookie = cookies.find((c) => c.split('=')[0] === name);

  if (cookie) return decodeURIComponent(cookie.split('=')[1]);

  return initialValue;
}

/**
 * @deleteCookie used to delete a cookie
 *
 * @param {name:string}
 * @param {path?:string}
 */
function deleteCookie(name: string, path = '/') {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
}

/**
 * @useCookies used to get and set cookies
 *
 * @param {key:string}
 * @param {initialValue:string}
 * @returns [item, updateItem]
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

  const deleteItem = useCallback(() => {
    deleteCookie(key);
  }, [key]);

  return { item, updateItem, deleteItem };
}

export { stringifyOptions, setCookie, getCookie, useCookies };
