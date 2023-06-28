import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

const setAuthHeader = token => { 
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }; 
   
// Utility to remove JWT 
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/api/auth/register', credentials)
            setAuthHeader(response.data.token)
            return response.data;
        } catch (err) {
            alert('You are not registered! Perhaps such a user already exists.');
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/api/auth/login', credentials)
            setAuthHeader(response.data.token)
            return response.data;
        } catch (err) {
            alert('No such user found, please register');
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/api/auth/logout')
            clearAuthHeader()
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);