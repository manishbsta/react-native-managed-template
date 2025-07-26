import { create } from 'zustand';

interface State {
  state1: string;
  state2: number;
}

interface Actions {
  setState1: (state1: string) => void;
  setState2: (state2: number) => void;
  resetStore: () => void;
}

type Store = State & Actions;

const initialState: State = {
  state1: 'state1',
  state2: 0,
};

export const useGlobalStore = create<Store>()(set => ({
  ...initialState,
  setState1: state1 => {
    set({ state1 });
  },
  setState2: state2 => {
    set({ state2 });
  },
  resetStore: () => {
    set({ ...initialState });
  },
}));
