import { StorageKeys } from '@src/core/constants/storage-keys';
import { mmkv } from '@src/utils/mmkv';
import axios from 'axios';

export { isAxiosError } from 'axios';

const client = axios.create({
  baseURL: 'HOST_URL',
});

client.interceptors.request.use(
  async config => {
    const token = mmkv.getString(StorageKeys.TOKEN);

    if (token) {
      //   config.headers['x-auth'] = token;
    }

    return config;
  },
  error => Promise.reject(error),
);

export default client;
