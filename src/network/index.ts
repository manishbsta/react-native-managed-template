import { StorageKeys } from '@src/core/constants/storage-keys';
import { getItemFromStorage } from '@src/utils/expo-secure-store';
import axios, { InternalAxiosRequestConfig } from 'axios';

export { isAxiosError } from 'axios';

const client = axios.create({
  baseURL: 'YOUR_BASE_URL_HERE',
  headers: {
    Accept: 'application/json',
  },
});

client.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const token = await getItemFromStorage(StorageKeys.TOKEN);

    if (token) {
      // add your own logic
      // config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: unknown) => {
    Promise.reject(error);
  },
);

export default client;
