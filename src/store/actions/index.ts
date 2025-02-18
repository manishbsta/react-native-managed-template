import { StorageKeys } from '@src/constants/storage-keys';
import { mmkv } from '@src/utils/mmkv';
import { initialState, store } from '..';

export const markSessionAsExpired = () => {
  store.sessionExpired = true;
};

export const resetGlobalStore = () => {
  const keys = mmkv.getAllKeys();

  // remove everything except email and theme tokens
  for (const key of keys) {
    if (key === StorageKeys.EMAIL || key === StorageKeys.APP_THEME) {
      continue;
    }

    mmkv.delete(key);
  }

  Object.assign(store, initialState);
};
