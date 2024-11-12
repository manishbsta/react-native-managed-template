import '../../global.css';

import { Fonts } from '@assets/fonts';
import RootProvider from '@src/core/providers/RootProvider';

import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
const AppLayout = () => {
  const [loaded] = useFonts(Fonts);

  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!loaded) return null;

  return (
    <RootProvider>
      <Slot />
    </RootProvider>
  );
};

export default AppLayout;
