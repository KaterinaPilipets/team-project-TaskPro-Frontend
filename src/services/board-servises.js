import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

//  таски активной доски,
export const fetchBoard = createAsyncThunk(
  'board/fetchBoard',
  async ({ boardId }, thunkAPI) => {
    console.log(boardId);
    try {
      const resp = await axios.get(`api/boards/${boardId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'board/addtask',
  async ({ id }, thunkAPI) => {
    try {
      const resp = await axios.post('/board', { id });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'board/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const resp = await axios.delete(`/board/${taskId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'board/addColumn',
  async ({ title, boardId }, thunkAPI) => {
    try {
      const { data } = await axios.post(`/api/columns/${boardId}`, { title });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchColumn = createAsyncThunk(
  'board/patchColumn',
  async ({ title, columnId }, thunkAPI) => {
    console.log(columnId);
    try {
      const { data } = await axios.patch(`/api/columns/${columnId}`, { title });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'board/deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/columns/${columnId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
