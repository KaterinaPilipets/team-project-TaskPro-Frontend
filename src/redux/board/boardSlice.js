import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBoard,
  addCard,
  deleteCard,
  addColumn,
  deleteColumn,
  patchColumn,
} from '../../services/board-servises';
const boardSlice = createSlice({
  name: 'board',
  initialState: {
    columns: [],
    cards: [],
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.columns = payload.columns;
        state.cards = payload.cards;
      })
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.columns.push(payload);
      })
      .addCase(patchColumn.fulfilled, (state, { payload }) => {
        state.columns = state.columns.map(column => {
          if (column._id === payload._id) {
            return payload;
          }

          return column;
        });
      })
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        const index = state.columns.findIndex(
          column => column._id === payload._id
        );
        state.columns.splice(index, 1);
      })
      .addCase(addCard.fulfilled, (state, { payload }) => {
        state.cards.push(payload);
      })
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        const index = state.cards.findIndex(card => card.id === payload.id);
        state.cards.splice(index, 1);
      }),
  // .addMatcher(
  //   isAnyOf(fetchBoard.pending, addTask.pending, deleteTask.pending),
  //   state => {
  //     state.isLoading = true;
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(fetchBoard.rejected, addTask.rejected, deleteTask.rejected),
  //   (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = payload;
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(fetchBoard.fulfilled, addTask.fulfilled, deleteTask.fulfilled),
  //   state => {
  //     state.isLoading = false;
  //     state.error = null;
  //   }
  // ),
});
export const boardReducer = boardSlice.reducer;
