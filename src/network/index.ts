import { StorageKeys } from '@src/constants/storage-keys';
import { DemoBaseUrl, LiveBaseUrl, Urls } from '@src/constants/urls';
import { markSessionAsExpired } from '@src/store/actions';
import { mmkv } from '@src/utils/mmkv';
import axios, { isAxiosError } from 'axios';
import * as Application from 'expo-application';

const isDemoApp =
  process.env.APP_VARIANT === 'development' || process.env.APP_VARIANT === 'preview';

const client = axios.create({
  baseURL: isDemoApp ? DemoBaseUrl : LiveBaseUrl,
  headers: {
    BuildVersion: Application.nativeBuildVersion,
    ApplicationVersion: Application.nativeApplicationVersion,
  },
});

client.interceptors.request.use(
  async config => {
    const token = mmkv.getString(StorageKeys.TOKEN);

    if (token) {
      // config.headers['x-auth'] = token;
      // config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (isAxiosError(error)) {
      if (error.response?.status === 401 && error.config?.url !== Urls.login) {
        markSessionAsExpired();
      }
    }

    console.error('Error:', error);
    return Promise.reject(error);
  },
);

export { isAxiosError };
export default client;
