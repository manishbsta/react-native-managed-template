import { StorageKeys } from '@src/constants/storage-keys';
import { mmkv } from '@src/utils/mmkv';
import { AppTheme } from '@src/utils/unistyles';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';

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
    const theme = mmkv.getString(StorageKeys.APP_THEME);
    if (theme) {
      const appTheme = theme as AppTheme;
      setTheme(appTheme);
    }
  }, []);

  const updateTheme = (theme: AppTheme) => {
    setTheme(theme);
    UnistylesRuntime.setTheme(theme);
    mmkv.set(StorageKeys.APP_THEME, theme);
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
