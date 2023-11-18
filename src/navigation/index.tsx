import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import MainStack from './MainStack';
import { RootStackParams } from './_types';
import LoginScreen from '../screens/LoginScreen';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setToken } from '../store/slices/auth.slice';
import { getItemFromStorage } from '../utils/expo-secure-store';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParams>();
const RootNavigation = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((s) => s.auth);

  useEffect(() => {
    getDataFromStorage();

    const timeout = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const getDataFromStorage = async () => {
    const accessToken = await getItemFromStorage('token');
    if (accessToken) dispatch(setToken(accessToken));
  };

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <Screen
          name='main_stack'
          component={MainStack}
        />
      ) : (
        <Screen
          name='login'
          component={LoginScreen}
        />
      )}
    </Navigator>
  );
};

export default RootNavigation;
