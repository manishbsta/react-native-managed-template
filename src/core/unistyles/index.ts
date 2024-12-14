import { StyleSheet } from 'react-native-unistyles';
import { lightTheme } from './theme';

type AppTheme = {
  light: typeof lightTheme;
};

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppTheme {}
}

StyleSheet.configure({
  themes: {
    light: lightTheme,
  },
  settings: {
    adaptiveThemes: false,
    initialTheme: 'light',
  },
});
