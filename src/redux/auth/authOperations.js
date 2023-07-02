import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/register', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const updateTheme = createAsyncThunk(
  'users/updateThemes',
  async (theme, thunkAPI) => {
    try {
      const { data } = await axios.patch('/api/users/themes', { theme });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
