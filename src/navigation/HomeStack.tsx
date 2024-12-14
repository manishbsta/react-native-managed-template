import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@src/screens/Home';
import Settings from '@src/screens/Settings';
import React from 'react';
import { HomeStackParams } from './types';

const Stack = createNativeStackNavigator<HomeStackParams>();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeStack;
