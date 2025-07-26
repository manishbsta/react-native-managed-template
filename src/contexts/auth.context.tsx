import { StorageKeys } from '@/constants/storage-keys';
import { SecureStore } from '@/lib/secure-store';
import { useQueryClient } from '@tanstack/react-query';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useGlobalStore } from '../store';

// Define the type for the context value
interface AuthContextType {
  storeToken: (token: string) => void;
  logOut: () => void;
  token: string | null | undefined;
}

// Create the context for authentication
const AuthContext = createContext<AuthContextType>({
  token: null,
  logOut: () => null,
  storeToken: (token: string) => null,
});

// Create the AuthProvider Wrapper Component
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();
  const { resetStore } = useGlobalStore();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = SecureStore.getItem(StorageKeys.TOKEN);
    if (token) setToken(token);
  }, []);

  const storeToken = (token: string) => {
    setToken(token);
    SecureStore.setItem(StorageKeys.TOKEN, token);
  };

  const logOut = () => {
    resetStore();
    queryClient.clear();

    SecureStore.deleteItemAsync(StorageKeys.TOKEN);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        logOut,
        storeToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};
