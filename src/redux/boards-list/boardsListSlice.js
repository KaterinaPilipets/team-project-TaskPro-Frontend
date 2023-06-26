import { createSlice } from '@reduxjs/toolkit';
import { fetchBoardsList } from 'services/boardslist-services';

const boardInitialState = {
  items: [],
};

const boardsListSlice = createSlice({
  name: 'boardsList',
  initialState: boardInitialState,

  extraReducers: builder =>
    builder.addCase(fetchBoardsList.fulfilled, (state, { payload }) => {
      state.items = payload;
    }),
});

export const boardsListReducer = boardsListSlice.reducer;
