import { createSlice } from '@reduxjs/toolkit';
import { fetchBoardsList, createBoard } from 'services/boardslist-services';

const boardInitialState = {
  items: [],
};

const boardsListSlice = createSlice({
  name: 'boardsList',
  initialState: boardInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchBoardsList.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(createBoard.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      }),
});

export const boardsListReducer = boardsListSlice.reducer;
