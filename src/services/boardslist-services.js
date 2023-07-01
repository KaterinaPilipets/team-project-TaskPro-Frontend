import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

export const fetchBoardsList = createAsyncThunk(
  'boardsList/fetchBoardsList',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/boards');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const createBoard = createAsyncThunk(
  'boardsList/createBoard',
  async (boardData, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/boards', boardData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boardsList/editBoard',
  async ({ id, value }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/boards/${id}`, value);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boardList/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      await axios.delete(`/api/boards/${boardId}`);

      return boardId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
