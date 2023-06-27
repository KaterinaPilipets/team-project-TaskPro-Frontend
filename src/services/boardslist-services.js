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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
