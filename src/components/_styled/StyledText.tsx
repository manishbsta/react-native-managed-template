import { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';

type PropsWithVariants = UnistylesVariants<typeof styles>;
interface StyledTextProps extends PropsWithChildren, PropsWithVariants, TextProps {}

export const StyledText = ({ children, variant, fontWeight, ...props }: StyledTextProps) => {
  styles.useVariants({
    variant,
    fontWeight,
  });

  return (
    <Text {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create(({ colors, fonts }) => ({
  text: {
    color: colors.text,
    variants: {
      variant: {
        heading: {
          fontSize: 32,
          fontFamily: fonts.bold,
        },
        title: {
          fontSize: 24,
          fontFamily: fonts.semibold,
        },
        subtitle: {
          fontSize: 18,
          fontFamily: fonts.medium,
        },
        body: {
          fontSize: 16,
          fontFamily: fonts.regular,
        },
        caption: {
          fontSize: 13,
          fontFamily: fonts.light,
        },
        default: {
          fontSize: 16,
          fontFamily: fonts.regular,
        },
      },
      fontWeight: {
        light: {
          fontFamily: fonts.light,
        },
        regular: {
          fontFamily: fonts.regular,
        },
        medium: {
          fontFamily: fonts.medium,
        },
        semibold: {
          fontFamily: fonts.semibold,
        },
        bold: {
          fontFamily: fonts.bold,
        },
      },
    },
  },
}));
