import { StorageKeys } from '@src/constants/storage-keys';
import { resetGlobalStore } from '@src/store/actions';
import { mmkv } from '@src/utils/mmkv';
import { useQueryClient } from '@tanstack/react-query';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

// Define the type for the context value
interface AuthContextType {
  storeToken: (token: string) => void;
  logOut: () => void;
  token?: string | null;
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
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = mmkv.getString(StorageKeys.TOKEN);
    if (token) setToken(token);
  }, []);

  const storeToken = (token: string) => {
    setToken(token);
    mmkv.set(StorageKeys.TOKEN, token);
  };

  const logOut = () => {
    setToken(null);
    resetGlobalStore();
    queryClient.clear();
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
