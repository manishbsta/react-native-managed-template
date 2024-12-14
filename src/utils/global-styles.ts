import { StyleSheet } from 'react-native-unistyles';

export const globalStyles = StyleSheet.create(({ colors, font, radii, margins }) => ({
  screen: {
    flex: 1,
    padding: margins.base,
    backgroundColor: colors.background,
  },
  card: {
    padding: margins.base,
    borderRadius: radii.base,
    backgroundColor: colors.surface,
  },
  heading: {
    fontSize: 24,
    color: colors.primary,
    fontFamily: font.bold,
  },
  subHeading: {
    fontSize: 18,
    color: colors.paragraph,
    fontFamily: font.medium,
  },
  titleText: {
    fontSize: 18,
    color: colors.text,
    fontFamily: font.bold,
  },
  subtitleText: {
    fontSize: 14,
    color: colors.paragraph,
    fontFamily: font.regular,
  },
}));
