import { proxy, useSnapshot } from 'valtio';

interface GlobalState {
  sessionExpired: boolean;
}

export const initialState: GlobalState = {
  sessionExpired: false,
};

export const store = proxy<GlobalState>({ ...initialState });

// Custom hook to access the store
export const useGlobalSnapshot = () => {
  const snapshot = useSnapshot(store);
  return snapshot;
};
