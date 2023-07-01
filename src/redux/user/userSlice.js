import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUserData, updateUserData } from './operations';

const extraActions = [fetchUserData, updateUserData];

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'theme',
  initialState: {
    name: '',
    email: '',
    theme: '',
    avatarURL: '',
    activeBoard: '',
    error: '',
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.theme = payload.theme;
        state.avatarURL = payload.avatarURL;
        state.activeBoard = payload.activeBoard;
      })
      .addCase(updateUserData.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.theme = payload.theme;
        state.avatarURL = payload.avatarURL;
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        handleRejected
      ),
});
const userReducer = userSlice.reducer;
export default userReducer;
