import { Images } from '@assets/images';
import StyledButton from '@src/components/_styled/StyledButton';
import { StyledText } from '@src/components/_styled/StyledText';
import StyledTextInput from '@src/components/_styled/StyledTextInput';
import { useAuthContext } from '@src/contexts/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { UnistylesRuntime } from 'react-native-unistyles';

const SignIn = () => {
  const router = useRouter();
  const { storeToken } = useAuthContext();
  const { height } = useWindowDimensions();

  const [passwordShown, setPasswordShown] = useState(false);

  const login = () => {
    storeToken('my-token');
    router.replace('/');
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 80,
        paddingHorizontal: 16,
        paddingTop: UnistylesRuntime.statusBar.height,
      }}>
      <View
        style={{
          gap: 4,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: height * 0.18,
        }}>
        <Image source={Images.logo} style={{ height: 170, width: 170 }} resizeMode='contain' />
        <StyledText variant='title' style={{ textAlign: 'center' }}>
          Let's sign you in
        </StyledText>
        <StyledText variant='caption' style={{ textAlign: 'center' }}>
          Enter your email and password to continue
        </StyledText>
      </View>
      <View style={{ gap: 24, marginTop: 40 }}>
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

export default SignIn;
