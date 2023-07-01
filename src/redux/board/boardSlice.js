import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBoard,
  addTask,
  deleteTask,
  addColumn,
  deleteColumn,
  patchColumn,
} from '../../services/board-servises';
const boardSlice = createSlice({
  name: 'board',
  initialState: {
    columns: [],
    tasks: [],
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.board = payload;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.board.tasks.push(payload);
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        const index = state.tasks.findIndex(task => task.id === payload.id);
        state.board.tasks.splice(index, 1);
      })

      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.board.columns.push(payload);
      })
      .addCase(patchColumn.fulfilled, (state, { payload }) => {
        state.board.columns = state.board.columns[0].title = payload.title;
      })
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        state.board.columns = state.board.columns.filter(
          ({ _id }) => _id !== payload._id
        );
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
