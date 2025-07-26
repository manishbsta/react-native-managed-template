export const FONTS = {
  Rubik: require('@/assets/fonts/Rubik-Regular.ttf'),
  RubikLight: require('@/assets/fonts/Rubik-Light.ttf'),
  RubikMedium: require('@/assets/fonts/Rubik-Medium.ttf'),
  RubikSemiBold: require('@/assets/fonts/Rubik-SemiBold.ttf'),
  RubikBold: require('@/assets/fonts/Rubik-Bold.ttf'),
};

export type FontFamily = keyof typeof FONTS;
