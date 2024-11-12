import { StorageKeys } from '@src/core/constants/storage-keys';
import { getItemFromStorage } from '@src/utils/expo-secure-store';
import { Redirect, Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';

const ProtectedLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const token = await getItemFromStorage(StorageKeys.TOKEN);
      if (token) setIsAuthenticated(true);
      setIsLoading(false);
    };

    getDataFromStorage();
  }, []);

  if (isLoading) return null;

  if (!isAuthenticated) return <Redirect href='/sign-in' />;

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name='settings'
        options={{ title: 'Settings' }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
