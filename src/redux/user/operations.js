import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com/api';
export const fetchUserData = createAsyncThunk(
  'users/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('/users/current');
      console.log(resp.data);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'users/updateUserData',
  async (formData, thunkAPI) => {
    try {
      const resp = await axios.patch('api/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(resp.data);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
