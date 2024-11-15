import { StorageKeys } from '@src/core/constants/storage-keys';
import { addItemToStorage } from '@src/utils/expo-secure-store';

import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    if (router.canDismiss()) {
      router.dismissAll();
    }

    addItemToStorage(StorageKeys.TOKEN, 'abc');
    router.push('/');
  };

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <TouchableOpacity
        onPress={handleLogin}
        className='rounded-lg bg-blue-500 p-4 px-10'>
        <Text className='text-white'>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
