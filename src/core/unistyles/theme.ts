import { FontFamily } from '@assets/fonts';

const margins = {
  xxs: 4,
  xs: 8,
  sm: 10,
  base: 12,
  md: 16,
  lg: 18,
  xl: 32,
  xxl: 64,
};

const radii = {
  sm: 5,
  base: 8,
  md: 12,
  lg: 18,
  rounded: 9999,
};

export const lightTheme = {
  colors: {
    primary: '#4DAAA9',
    background: '#F8F9FD',
    text: '#334152',
    paragraph: '#728092',
    surface: '#FFFFFF',
    divider: '#C0C0C0',
    disabled: '#BEBFC5',
    error: '#C51E3A',
    success: '#228B22',
    light: '#FFFFFF',
    dark: '#000000',
  },
  radii,
  margins,
  font: FontFamily,
} as const;
