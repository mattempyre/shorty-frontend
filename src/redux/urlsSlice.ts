// src/redux/urlsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UrlsState = {
  longUrl: string;
  shortUrl: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: UrlsState = {
  longUrl: '',
  shortUrl: '',
  status: 'idle',
};

const urlsSlice = createSlice({
  name: 'urls',
  initialState,
  reducers: {
    setLongUrl: (state, action: PayloadAction<string>) => {
      state.longUrl = action.payload;
    },
    setShortUrl: (state, action: PayloadAction<string>) => {
      state.shortUrl = action.payload;
    },
    setStatus: (state, action: PayloadAction<UrlsState['status']>) => {
      state.status = action.payload;
    },
  },
});

export const { setLongUrl, setShortUrl, setStatus } = urlsSlice.actions;
export default urlsSlice.reducer;
