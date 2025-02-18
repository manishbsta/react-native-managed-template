import { StorageKeys } from '@src/constants/storage-keys';
import { StyleSheet } from 'react-native-unistyles';
import { mmkv } from './mmkv';

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

const fonts = {
  light: 'RobotoSlab-Light',
  regular: 'RobotoSlab-Regular',
  medium: 'RobotoSlab-Medium',
  semibold: 'RobotoSlab-SemiBold',
  bold: 'RobotoSlab-Bold',
};

export const lightTheme = {
  fonts,
  colors: {
    primary: '#294A9A',
    tint: '#294A9A',
    secondary: '#ED5932',
    accent: '#206F79',
    background: '#f7f7f7',
    border: '#ccc',
    disabled: '#bdbdbd',
    error: '#C51E3A',
    success: '#228B22',

    // Static Colors
    light: '#f7f7f7',
    dark: '#303135',

    // Text colors
    text: '#333333',
    placeholderText: '#757575',
  },
};

export const darkTheme = {
  fonts,
  colors: {
    primary: '#294A9A',
    tint: '#7986cb',
    secondary: '#ED5932',
    accent: '#206F79',
    background: '#303135',
    border: '#616161',
    disabled: '#bdbdbd',
    error: '#C51E3A',
    success: '#228B22',

    // Static Colors
    light: '#f7f7f7',
    dark: '#303135',

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
      let initialTheme: AppTheme = 'light';

      // check for user's theme preference
      const theme = mmkv.getString(StorageKeys.APP_THEME);
      if (theme) {
        initialTheme = theme as AppTheme;
      }

      return initialTheme;
    },
  },
  breakpoints,
  themes: appThemes,
});
