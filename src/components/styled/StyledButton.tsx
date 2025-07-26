import Icon from '@expo/vector-icons/Ionicons'; // Using Expo vector icons
import React, { ComponentProps } from 'react';
import { ActivityIndicator, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { StyledText } from './StyledText';

type PropsWithVariants = UnistylesVariants<typeof styles>;
interface StyledButtonProps extends PropsWithVariants {
  title?: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  compact?: boolean;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  iconPosition?: 'left' | 'right';
  icon?: ComponentProps<typeof Icon>['name'];
}
export const StyledButton: React.FC<StyledButtonProps> = ({
  title,
  icon,
  onPress,
  compact,
  containerStyle,
  titleStyle,
  variant = 'primary',
  loading = false,
  disabled = false,
  iconPosition = 'left',
}) => {
  const ICON_SIZE = compact ? 18 : 20;

  styles.useVariants({ variant });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled || loading}
      style={[
        styles.button(compact),
        containerStyle,
        (disabled || loading) && styles.disabledButton,
      ]}>
      <View style={styles.content}>
        {!loading && icon && iconPosition === 'left' && (
          <Icon name={icon} size={ICON_SIZE} style={styles.icon} />
        )}
        {loading ? (
          <ActivityIndicator size='small' color={styles.activityIndicator.color} />
        ) : (
          <StyledText
            fontWeight='medium'
            style={[styles.text(compact), titleStyle]}
            numberOfLines={1}>
            {title}
          </StyledText>
        )}
        {!loading && icon && iconPosition === 'right' && (
          <Icon name={icon} size={ICON_SIZE} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(({ colors }) => ({
  button: (compact?: boolean) => ({
    height: compact ? 38 : 48,
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    variants: {
      variant: {
        primary: {
          backgroundColor: colors.primary,
        },
        secondary: {
          backgroundColor: colors.secondary,
        },
      },
    },
  }),
  disabledButton: {
    backgroundColor: colors.disabled,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  icon: {
    marginHorizontal: 8,
    color: colors.light,
  },
  text: (compact?: boolean) => ({
    textAlign: 'center',
    color: colors.light,
    letterSpacing: 0.8,
    fontSize: compact ? 14 : 16,
  }),
  activityIndicator: {
    color: colors.primary,
  },
}));
