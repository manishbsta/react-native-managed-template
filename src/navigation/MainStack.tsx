import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { MainStackParams } from './_types';

const { Screen, Navigator } = createNativeStackNavigator<MainStackParams>();
const MainStack = () => {
  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
      />
    </Navigator>
  );
};

export default MainStack;
