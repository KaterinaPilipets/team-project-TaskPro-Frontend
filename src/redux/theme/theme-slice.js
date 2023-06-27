import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'auth',
  initialState: {
    themeColor: 'dark',
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.themeColor = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
