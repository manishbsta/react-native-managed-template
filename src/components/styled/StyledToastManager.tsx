import React from 'react';
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
  ToastConfig,
  ToastType,
} from 'react-native-toast-message';
import { StyleSheet } from 'react-native-unistyles';

const toastConfig: ToastConfig = {
  info: props => (
    <InfoToast
      {...props}
      style={styles.container(props.type)}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),

  success: props => (
    <BaseToast
      {...props}
      style={styles.container(props.type)}
      text1Style={styles.text1}
      text2Style={styles.text2}
      text2NumberOfLines={4}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      style={styles.container(props.type)}
      text1Style={styles.text1}
      text2Style={styles.text2}
      text2NumberOfLines={4}
    />
  ),
};

const StyledToastManager = () => {
  return <Toast config={toastConfig} autoHide swipeable visibilityTime={2000} />;
};

const styles = StyleSheet.create(({ colors, fonts }) => ({
  container: (type: ToastType) => {
    let borderLeftColor: string = colors.primaryTint;

    switch (type) {
      case 'success':
        borderLeftColor = colors.success;
        break;
      case 'error':
        borderLeftColor = colors.error;
        break;

      case 'info':
        borderLeftColor = colors.primaryTint;
        break;

      default:
        borderLeftColor = colors.primary;
        break;
    }

    return {
      borderLeftColor,
    };
  },

  text1: {
    fontFamily: fonts.medium,
  },
  text2: {
    fontFamily: fonts.regular,
  },
}));

export default StyledToastManager;
