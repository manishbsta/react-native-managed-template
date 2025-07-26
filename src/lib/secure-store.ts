import * as ExpoSecureStore from 'expo-secure-store';

export class SecureStore {
  static getItem = (key: string) => {
    return ExpoSecureStore.getItem(key);
  };

  static setItem = (key: string, value: string) => {
    return ExpoSecureStore.setItem(key, value);
  };

  static deleteItemAsync = async (key: string) => {
    return ExpoSecureStore.deleteItemAsync(key);
  };
}
