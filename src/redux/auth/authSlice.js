import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: "", name: "", avatarURL: "", theme: "", activeBoard: "" },
    token: "",
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, {payload}) => {
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.user.avatarURL = payload.user.avatarURL;
        state.user.theme = payload.user.theme;
        state.user.activeBoard = payload.user.activeBoard;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.user.avatarURL = payload.user.avatarURL;
        state.user.theme = payload.user.theme;
        state.user.activeBoard = payload.user.activeBoard;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user.email = "";
        state.user.name = "";
        state.user.avatarURL = "";
        state.user.theme = "";
        state.user.activeBoard = "";
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (action, state) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
    // setTheme(state, action) {
    //   state.user.themeColor = action.payload;
    // },
});

// export const { setUser, setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;