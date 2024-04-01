import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import { CookieNames, getCookie } from "../utils/BrowserUtils";
import APIRoutes from "./APIRoutes";
import { accessTokenIsValid, renewAccessToken } from "./Auth";

const AXIOS_REQUEST_TIMEOUT = 1e3 * 100;

export const getAPIConfiguration = (noAuthorization?: boolean): AxiosRequestConfig => ({
  timeout: AXIOS_REQUEST_TIMEOUT,
  baseURL: "https://insiit-api.onrender.com",
  headers:
    (!noAuthorization && {
      "x-api-key": `bearer D4tuaQYa1m2pqpILHOND4KSauRFMvbaU`,
    }) ||
    {},
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const refreshAccessTokenIfNeeded = async () => {
  return;
  if (!(await accessTokenIsValid())) {
    await renewAccessToken();
  }
};

export const fetchUsingPOST = async <T, U>(route: APIRoutes, body: T, params?: string[], noToken?: boolean) => {
  if (!noToken) await refreshAccessTokenIfNeeded();
  const config = getAPIConfiguration();
  return await axios.post<T, AxiosResponse<U>>(route.concat(params?.join("") || ""), body, config);
};

export const fetchUsingGET = async <T>(route: APIRoutes, params?: string[], noToken?: boolean) => {
  if (!noToken) await refreshAccessTokenIfNeeded();
  const config = getAPIConfiguration();
  return await axios.get<T>(route.concat(params?.join("") || ""), config);
};

export const fetchUsingPut = async <T, U>(route: APIRoutes, body?: T, params?: string[], noToken?: boolean) => {
  if (!noToken) await refreshAccessTokenIfNeeded();
  const config = getAPIConfiguration();
  return await axios.put<T, AxiosResponse<U>>(route.concat(params?.join("") || ""), body, config);
};

export const fetchUsingDelete = async <T>(route: APIRoutes, body?: T, params?: string[], noToken?: boolean) => {
  if (!noToken) await refreshAccessTokenIfNeeded();
  const config = getAPIConfiguration();
  return await axios.delete<T>(route.concat(params?.join("") || ""), {
    ...config,
    data: body,
  });
};
