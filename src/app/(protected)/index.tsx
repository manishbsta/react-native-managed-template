import { useAppDispatch } from '@src/store/hooks';
import { logOut } from '@src/store/slices/auth.slice';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(logOut());

    if (router.canDismiss()) {
      router.dismissAll();
    }
    router.push('/sign-in');
  };

  return (
    <View className='flex-1 items-center justify-center'>
      <TouchableOpacity
        onPress={handleLogOut}
        className='rounded-lg bg-red-500 p-4 px-10'>
        <Text className='text-white'>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
