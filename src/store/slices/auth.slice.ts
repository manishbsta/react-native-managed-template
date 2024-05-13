import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './types';
import { addItemToStorage, clearSecureStorage } from '../../utils/expo-secure-store';

const initialState: AuthState = {
  token: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      addItemToStorage('token', action.payload);
    },

    logOut: () => {
      clearSecureStorage();
    },
  },
});

export const { setToken, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
