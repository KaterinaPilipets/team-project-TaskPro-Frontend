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
  async ({ name, number }, thunkAPI) => {
    try {
      const resp = await axios.post('/board', { name, number });
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
