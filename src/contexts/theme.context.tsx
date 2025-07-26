import { StorageKeys } from '@/constants/storage-keys';
import { SecureStore } from '@/lib/secure-store';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { AppTheme } from '../unistyles';

// Define the type for the context value
interface ThemeContextType {
  theme: AppTheme;
  updateTheme: (theme: AppTheme) => void;
}

// Create the context for themes
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  updateTheme: () => null,
});

// Create the ThemeProvider Wrapper Component
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<AppTheme>('light');

  useEffect(() => {
    const theme = SecureStore.getItem(StorageKeys.THEME);
    if (theme) {
      const appTheme = theme as AppTheme;
      setTheme(appTheme);
    }
  }, []);

  const updateTheme = (theme: AppTheme) => {
    setTheme(theme);
    UnistylesRuntime.setTheme(theme);
    SecureStore.setItem(StorageKeys.THEME, theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        updateTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Create a custom hook to use the ThemeContext
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};
