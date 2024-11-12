import { StorageKeys } from '@src/core/constants/storage-keys';
import * as SecureStore from 'expo-secure-store';

export const addItemToStorage = async (key: StorageKeys, value: any) => {
  const v = typeof value === 'string' ? value : JSON.stringify(value);
  try {
    await SecureStore.setItemAsync(key, v);
  } catch (error) {
    console.log('AddItemToStorage', error);
  }
};

export const getItemFromStorage = async (key: StorageKeys) => {
  try {
    const item = await SecureStore.getItemAsync(key);
    return item;
  } catch (error) {
    console.log('GetItemFromStorage', error);
    return null;
  }
};

export const removeItemFromStorage = async (key: StorageKeys) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('RemoveItemFromStorage', error);
  }
};

export const clearSecureStorage = async () => {
  try {
    Object.values(StorageKeys).forEach(async val => {
      await SecureStore.deleteItemAsync(val);
    });
  } catch (error) {
    console.log('ClearSecureStorage', error);
  }
};
