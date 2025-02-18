import Ionicons from '@expo/vector-icons/Ionicons';
import SessionExpiryHandler from '@src/components/_shared/SessionExpiryHandler';
import { useAuthContext } from '@src/contexts/AuthContext';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { useUnistyles } from 'react-native-unistyles';

const ProtectedLayout = () => {
  const { token } = useAuthContext();
  const { theme } = useUnistyles();

  if (!token) {
    return <Redirect href='/sign-in' />;
  }

  return (
    <>
      <Tabs
        screenOptions={{
          animation: 'shift',
          headerShown: false,
          tabBarActiveTintColor: theme.colors.tint,
        }}>
        <Tabs.Screen
          name='index'
          options={{
            tabBarLabel: 'Home',
            tabBarIcon({ color, focused, size }) {
              return (
                <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
              );
            },
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon({ color, focused, size }) {
              return (
                <Ionicons
                  size={size}
                  color={color}
                  name={focused ? 'person-circle' : 'person-circle-outline'}
                />
              );
            },
          }}
        />
      </Tabs>
      <SessionExpiryHandler />
    </>
  );
};

export default ProtectedLayout;
