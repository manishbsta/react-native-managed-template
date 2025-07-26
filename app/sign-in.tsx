import { Images } from '@/assets/images';
import { StyledButton } from '@/components/styled/StyledButton';
import { StyledText } from '@/components/styled/StyledText';
import { StyledTextInput } from '@/components/styled/StyledTextInput';
import { useAuthContext } from '@/contexts/auth.context';
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { StyleSheet } from 'react-native-unistyles';

const SignIn = () => {
  const { storeToken } = useAuthContext();

  const [passwordShown, setPasswordShown] = useState(false);

  const login = () => {
    storeToken('my-token');
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}>
      <View style={styles.headerContainer}>
        <Image source={Images.logo} style={styles.logo} resizeMode='contain' />
        <StyledText variant='title' style={styles.title}>
          Let&apos;s sign you in
        </StyledText>
        <StyledText variant='caption' style={styles.caption}>
          Enter your email and password to continue
        </StyledText>
      </View>
      <View style={styles.formContainer}>
        <StyledTextInput
          autoComplete='off'
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Username'
          leftIcon='account-alert-outline'
        />
        <StyledTextInput
          autoComplete='off'
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          leftIcon='lock-alert-outline'
          secureTextEntry={!passwordShown}
          onRightIconPress={() => setPasswordShown(ps => !ps)}
          rightIcon={passwordShown ? 'eye-off-outline' : 'eye-outline'}
        />
        <StyledButton icon='log-in-outline' title='Log in' onPress={login} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create((_, rt) => ({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
    paddingHorizontal: 16,
    paddingTop: rt.statusBar.height,
  },
  headerContainer: {
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: rt.screen.height * 0.18,
  },
  logo: {
    height: 170,
    width: 170,
  },
  title: {
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
  },
  formContainer: {
    gap: 24,
    marginTop: 40,
  },
}));

export default SignIn;
