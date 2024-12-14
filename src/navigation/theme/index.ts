import { FontFamily } from '@assets/fonts';
import { DefaultTheme, Theme } from '@react-navigation/native';

export const NavigationTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4DAAA9',
    background: '#F8F9FD',
    card: '#FFFFFF',
    text: '#334152',
    border: '#C0C0C0',
    notification: '#1976d2',
  },
  fonts: {
    regular: {
      fontFamily: FontFamily.regular,
      fontWeight: '400',
    },
    medium: {
      fontFamily: FontFamily.medium,
      fontWeight: '500',
    },
    bold: {
      fontFamily: FontFamily.semiBold,
      fontWeight: '600',
    },
    heavy: {
      fontFamily: FontFamily.bold,
      fontWeight: '700',
    },
  },
};
