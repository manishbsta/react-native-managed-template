import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useUnistyles } from 'react-native-unistyles';

const ProtectedLayout = () => {
  const { theme } = useUnistyles();

  return (
    <Tabs
      screenOptions={{
        animation: 'shift',
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primaryTint,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon({ color, focused, size }) {
            return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />;
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
  );
};

export default ProtectedLayout;
