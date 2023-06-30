import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBoardsList,
  createBoard,
  deleteBoard,
  editBoard,
} from 'services/boardslist-services';

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
      })
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        state.items = state.items.map(board => {
          if (board._id === payload._id) {
            return payload;
          }

          return board;
        });
      })
      .addCase(deleteBoard.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(board => board._id !== payload);
      }),
});

export const boardsListReducer = boardsListSlice.reducer;
