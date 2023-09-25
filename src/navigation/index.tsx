import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import LoginScreen from '../screens/LoginScreen';
import MainStack from './MainStack';
import { RootStackParams } from './_types';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParams>();
const RootNavigation = () => {
	const [isLoading, setLoading] = useState<boolean>(true);

	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='login' component={LoginScreen} />
			<Screen name='main_stack' component={MainStack} />
		</Navigator>
	);
};

export default RootNavigation;
