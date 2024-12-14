import { StorageKeys } from '@src/core/constants/storage-keys';
import { useAppDispatch } from '@src/store/hooks';
import { clearStorage } from '@src/store/slices/app.slice';
import { mmkv } from '@src/utils/mmkv';
import { PropsWithChildren, useEffect, useState } from 'react';
import { AuthContext } from './auth-context';

// Create the AuthProvider Wrapper Component
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = mmkv.getString(StorageKeys.TOKEN);
    if (token) setToken(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        storeToken: (token: string) => {
          setToken(token);
          mmkv.set(StorageKeys.TOKEN, token);
        },
        logOut: () => {
          setToken(null);
          dispatch(clearStorage());
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
