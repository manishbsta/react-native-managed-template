import axios, { isAxiosError } from 'axios';
import { SecureStore } from '@/lib/secure-store';
import { StorageKeys } from '@/constants/storage-keys';
import { Urls } from '@/constants/urls';

export { isAxiosError };

const client = axios.create({
  baseURL: 'http://127.0.0.1/api/',
});

client.interceptors.request.use(
  async config => {
    const token = SecureStore.getItem(StorageKeys.TOKEN);

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
        // your logic to handle 401 error
      }
    }

    console.error('Error:', error);
    return Promise.reject(error);
  },
);

export default client;
