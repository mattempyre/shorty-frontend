import { configureStore } from '@reduxjs/toolkit';
import urlsReducer from './urlsSlice';

const store = configureStore({
  reducer: {
    urls: urlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
