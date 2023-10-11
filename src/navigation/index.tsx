import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import LoginScreen from '../screens/LoginScreen';
import { useAppSelector } from '../store/hooks';
import MainStack from './MainStack';
import { RootStackParams } from './_types';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParams>();
const RootNavigation = () => {
	const { token } = useAppSelector((s) => s.auth);

	useEffect(() => {
		const timeout = setTimeout(() => {
			SplashScreen.hideAsync();
		}, 2500);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<Navigator screenOptions={{ headerShown: false }}>
			{token ? (
				<Screen name='main_stack' component={MainStack} />
			) : (
				<Screen name='login' component={LoginScreen} />
			)}
		</Navigator>
	);
};

export default RootNavigation;
