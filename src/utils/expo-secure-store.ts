import * as SecureStore from 'expo-secure-store';

import { KEYS } from '../core/constants/storage-keys';

export const addItemToStorage = async (key: keyof typeof KEYS, value: any) => {
  const v = typeof value === 'string' ? value : JSON.stringify(value);
  await SecureStore.setItemAsync(key, v);
};

export const getItemFromStorage = async (key: keyof typeof KEYS) => {
  return await SecureStore.getItemAsync(key);
};

export const removeItemFromStorage = async (key: keyof typeof KEYS) => {
  await SecureStore.deleteItemAsync(key);
};

export const clearSecureStorage = async () => {
  Object.keys(KEYS).forEach(async key => {
    await SecureStore.deleteItemAsync(key);
  });
};
