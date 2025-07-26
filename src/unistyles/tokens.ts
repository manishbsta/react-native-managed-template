import { FontFamily } from '@/assets/fonts';

export const palette = {
  primary: '#02384A',
  primaryTint: '#066B64',
  secondary: '#ED5932',
  accent: '#206F79',
  border: '#ccc',
  disabled: '#bdbdbd',
  error: '#C51E3A',
  success: '#228B22',
  surface: '#DCDCDC',

  // Static Colors
  light: '#f7f7f7',
  dark: '#303135',
} as const;

export const fonts: Record<string, FontFamily> = {
  regular: 'Rubik',
  light: 'RubikLight',
  medium: 'RubikMedium',
  semibold: 'RubikSemiBold',
  bold: 'RubikBold',
} as const;

export const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
} as const;

export const spacings = {
  xs: 4,
  sm: 8,
  md: 16,
  base: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  xxxxl: 56,
  xxxxxl: 64,
  full: 9999,
} as const;
