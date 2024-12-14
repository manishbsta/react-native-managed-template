import { combineReducers, configureStore, PayloadAction } from '@reduxjs/toolkit';

import { appReducer } from './slices/app.slice';

const combinedReducer = combineReducers({
  app: appReducer,
});

const rootReducer = (state: any, action: PayloadAction) => {
  if (action.type === 'app/clearStorage') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
