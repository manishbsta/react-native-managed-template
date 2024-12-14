import { Images } from '@assets/images';
import StyledText from '@src/core/components/StyledText';
import { useAuthContext } from '@src/core/contexts/auth';
import { wH, wW } from '@src/utils/dimensions';
import { globalStyles } from '@src/utils/global-styles';
import { Image } from 'expo-image';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

const Login = () => {
  const { storeToken } = useAuthContext();

  const handleLogin = () => {
    storeToken('random-token');
  };

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={styles.content}>
        <Image source={Images.welcome} style={styles.welcomeImage} />
        <StyledText style={[globalStyles.heading, styles.text]}>Welcome back!</StyledText>
        <StyledText style={[globalStyles.subHeading, styles.text]}>Proceed to log in</StyledText>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={handleLogin} style={styles.loginButton}>
        <StyledText style={[globalStyles.titleText, styles.buttonLabel]}>Log In</StyledText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create(({ margins: margins, colors }) => ({
  content: {
    marginTop: wH * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeImage: {
    width: wW * 0.65,
    height: wW * 0.65,
    marginBottom: margins.xl,
  },
  text: {
    textAlign: 'center',
    marginBottom: margins.xxs,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: margins.xxl,
    padding: margins.base,
    borderRadius: margins.base,
    backgroundColor: colors.primary,
  },
  buttonLabel: {
    color: colors.light,
    textAlign: 'center',
  },
}));
