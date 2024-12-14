import { createContext } from 'react';

// Define the type for the context value
type AuthContextType = {
  storeToken: (token: string) => void;
  logOut: () => void;
  token?: string | null;
};

// Create the context for authentication
export const AuthContext = createContext<AuthContextType>({
  token: null,
  logOut: () => null,
  storeToken: (token: string) => null,
});
