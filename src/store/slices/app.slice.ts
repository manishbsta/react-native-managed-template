import { createSlice } from '@reduxjs/toolkit';
import { StorageKeys } from '@src/core/constants/storage-keys';
import { mmkv } from '@src/utils/mmkv';
import { AppState } from './types';

const initialState: AppState = {
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoadingg: (state, action) => {
      state.loading = action.payload;
    },
    clearStorage: () => {
      mmkv.delete(StorageKeys.TOKEN);

      // Or selectively preserve some key/value pairs
      // const keys = mmkv.getAllKeys();
      // for (const key of keys) {
      //   if (key === StorageKeys.EMAIL) continue;
      //   mmkv.delete(key);
      // }
    },
  },
});

export const { setLoadingg, clearStorage } = appSlice.actions;

export const appReducer = appSlice.reducer;
