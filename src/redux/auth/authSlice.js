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

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.user.token = action.payload;
    },
  },
});

export const { setUser, setToken } = authSlice.actions;

export default authSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     // token: null,]
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