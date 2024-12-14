import '@src/core/unistyles';

import { AuthProvider } from '@src/core/contexts/auth';
import AppNavigation from '@src/navigation';
import { store } from '@src/store';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';

const App = () => {
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <AuthProvider>
            <AppNavigation />
          </AuthProvider>
        </ReduxProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
