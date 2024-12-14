import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@src/screens/Login';
import React from 'react';
import { AuthStackParams } from './types';

const Stack = createNativeStackNavigator<AuthStackParams>();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
