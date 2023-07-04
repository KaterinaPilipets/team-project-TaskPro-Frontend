import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBoard,
  addCard,
  deleteCard,
  addColumn,
  deleteColumn,
  patchColumn,
  editCard,
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
        state.columns = state.columns.filter(column => column._id !== payload);
      })
      .addCase(addCard.fulfilled, (state, { payload }) => {
        state.cards.push(payload);
      })
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        state.cards = state.cards.filter(card => card._id !== payload);
      })
      .addCase(editCard.fulfilled, (state, { payload }) => {
        state.cards = state.cards.map(card => {
          if (card._id === payload._id) {
            return payload;
          }

          return card;
        });
      }),
});
export const boardReducer = boardSlice.reducer;
