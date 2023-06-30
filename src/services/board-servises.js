import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

//  таски активной доски,
export const fetchBoard = createAsyncThunk(
  'board/fetchBoard',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('/board');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// {
//     id: '1',
//     titleBord: '1col',or id
//     titleColumn: '1col',or id
//     name: 'The Watch Spot Design1',
//     discription: `Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.`,
//     priority: 'Low',
//     deadline: '12 / 05 / 2023',
//   },

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
      const resp = await axios.delete(`/cards/${taskId}`);
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
