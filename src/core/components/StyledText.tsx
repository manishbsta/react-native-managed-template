import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type StyledTextProps = TextProps & PropsWithChildren;
const StyledText = ({ children, style, ...props }: StyledTextProps) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create(({ colors, font }) => ({
  text: {
    fontSize: 16,
    color: colors.text,
    fontFamily: font.regular,
  },
}));
