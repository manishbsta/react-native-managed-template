import 'react-native-reanimated';

import { ThemeProvider } from '@react-navigation/native';
import { AuthProvider } from '@src/contexts/AuthContext';
import { ThemeProvider as AppThemeProvider } from '@src/contexts/ThemeContext';
import useNavigationTheme from '@src/hooks/useNavigationTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <KeyboardProvider>
        <StatusBar style='auto' />
        <AuthProvider>
          <AppThemeProvider>
            <App />
          </AppThemeProvider>
        </AuthProvider>
      </KeyboardProvider>
    </QueryClientProvider>
  );
}

function App() {
  const theme = useNavigationTheme();

  return (
    <ThemeProvider value={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}
