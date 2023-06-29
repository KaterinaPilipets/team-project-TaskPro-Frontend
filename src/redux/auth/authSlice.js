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
//       state.user.token = action.payload;
//     },
//   },
// });

// export const { setUser, setToken } = authSlice.actions;

// export default authSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, updateTheme } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: "", name: "", avatarURL: "", theme: "", activeBoard: "" },
    token: "",
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.avatarURL = payload.avatarURL;
        state.user.theme = payload.theme;
        state.user.activeBoard = payload.activeBoard;
        state.token = payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.avatarURL = payload.avatarURL;
        state.user.theme = payload.theme;
        state.user.activeBoard = payload.activeBoard;
        state.token = payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user.email = "";
        state.user.name = "";
        state.user.avatarURL = "";
        state.user.theme = "";
        state.user.activeBoard = "";
        state.token = "";
        // state.isLoggedIn = false;
      })
      // setTheme(state, action) {
      //   state.user.themeColor = action.payload;
      // },
      .addCase(updateTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload.theme;
        state.token = payload.token;
      })
});

// export const { setUser, setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;


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
