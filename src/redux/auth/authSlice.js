import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  register,
  login,
  logout,
  refreshUser,
  updateTheme,
  updateUserData,
} from './authOperations';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: '', name: '', avatarURL: '', theme: '', activeBoard: '' },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        // state.user.email = payload.email;
        // state.user.name = payload.name;
        // state.user.avatarURL = payload.avatarURL;
        // state.user.theme = payload.theme;
        // state.user.activeBoard = payload.activeBoard;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        // state.user.email = payload.email;
        // state.user.name = payload.name;
        // state.user.avatarURL = payload.avatarURL;
        // state.user.theme = payload.theme;
        // state.user.activeBoard = payload.activeBoard;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user.email = '';
        state.user.name = '';
        state.user.avatarURL = '';
        state.user.theme = '';
        state.user.activeBoard = '';
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        // action
        state.user = payload; // action.payload
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload.theme;
        // state.token = payload.token;
      })
      .addCase(updateUserData.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.theme = payload.theme;
        state.user.avatarURL = payload.avatarURL;
        state.isRefreshing = false;
        state.error = null;
        toast.success('Changes accepted!');
      })
      .addCase(updateUserData.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUserData.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
        toast.error(payload);
      }),
});

// export const { setUser, setToken, clearToken } = authSlice.actions;

export const authReducer = authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     // token: null,
//   },
//   reducers: {
//     setUser(state, action) {
//       state.user = action.payload;
//     },
//     setToken(state, action) {
//       state.token = action.payload;
//     },
//     clearUser(state) {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { setUser, setToken, clearUser, clearToken } = authSlice.actions;

// export default authSlice.reducer;
