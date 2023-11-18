import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { MainStackParams } from './_types';
import HomeScreen from '../screens/HomeScreen';

const { Screen, Navigator } = createNativeStackNavigator<MainStackParams>();
const MainStack = () => {
  return (
    <Navigator>
      <Screen
        name='home'
        component={HomeScreen}
      />
    </Navigator>
  );
};

export default MainStack;
