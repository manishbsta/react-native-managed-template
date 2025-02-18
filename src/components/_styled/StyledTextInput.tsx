import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React, { ComponentProps } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { StyledText } from './StyledText';

interface StyledTextInputProps extends TextInputProps {
  label?: string;
  error?: string | string[];
  onRightIconPress?: () => void;
  leftIcon?: ComponentProps<typeof Icon>['name'];
  rightIcon?: ComponentProps<typeof Icon>['name'];
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  ...props
}) => {
  const errorMessage = Array.isArray(error) ? error.join('\n') : error;

  return (
    <View style={styles.container}>
      {label ? <StyledText style={styles.label}>{label}</StyledText> : null}
      <View style={[styles.inputContainer, errorMessage ? styles.inputError : null]}>
        {leftIcon ? (
          <Icon name={leftIcon} size={24} style={[styles.icon, { marginLeft: 10 }]} />
        ) : null}
        <TextInput
          {...props}
          style={[styles.input, props.style]}
          placeholderTextColor={styles.inputPlaceholder.color}
        />
        {rightIcon ? (
          <TouchableOpacity onPress={onRightIconPress}>
            <Icon name={rightIcon} size={24} style={[styles.icon, { marginRight: 10 }]} />
          </TouchableOpacity>
        ) : null}
      </View>
      {errorMessage ? <StyledText style={styles.errorText}>{errorMessage}</StyledText> : null}
    </View>
  );
};

const styles = StyleSheet.create(({ colors, fonts }) => ({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 4,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    height: 45,
    color: colors.text,
    paddingHorizontal: 8,
    fontFamily: fonts.regular,
  },
  inputPlaceholder: {
    color: colors.placeholderText,
  },
  icon: {
    color: colors.accent,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    marginTop: 5,
    fontSize: 12,
    color: colors.error,
  },
}));

export default StyledTextInput;
