import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from '@src/core/contexts/auth';
import React, { useEffect, useState } from 'react';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import Splash from './Splash';
import { NavigationTheme } from './theme';
import { RootStackParams } from './types';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigation = () => {
  const { token } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // show splash screen while loading
  if (loading) return <Splash />;

  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!token ? (
          <Stack.Screen name='AuthStack' component={AuthStack} />
        ) : (
          <Stack.Screen name='HomeStack' component={HomeStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
