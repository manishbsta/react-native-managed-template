import { StorageKeys } from '@/constants/storage-keys';
import { SecureStore } from '@/lib/secure-store';
import { StyleSheet } from 'react-native-unistyles';
import { breakpoints, fonts, palette, spacings } from './tokens';

export const lightTheme = {
  fonts,
  spacings,
  colors: {
    ...palette,
    background: '#f7f7f7',

    // Text colors
    text: '#333333',
    placeholderText: '#757575',
  },
};

export const darkTheme = {
  fonts,
  spacings,
  colors: {
    ...palette,
    background: '#303135',

    // Text colors
    text: '#f9f9f9',
    placeholderText: '#9e9e9e',
  },
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;
export type AppTheme = keyof AppThemes;

declare module 'react-native-unistyles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: () => {
      let theme: AppTheme = 'light';

      // check for user's theme preference
      const savedTheme = SecureStore.getItem(StorageKeys.THEME);
      if (savedTheme) {
        theme = savedTheme as AppTheme;
      }

      return theme;
    },
  },
  breakpoints,
  themes: appThemes,
});
