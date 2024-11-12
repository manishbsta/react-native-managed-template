import { store } from '@src/store';
import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </Provider>
  );
};

export default RootProvider;
