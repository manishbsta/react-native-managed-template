import { createSlice } from '@reduxjs/toolkit';

import { clearSecureStorage } from '@src/utils/expo-secure-store';
import { AuthState } from './types';

const initialState: AuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      clearSecureStorage();
    },
  },
});

export const { logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
