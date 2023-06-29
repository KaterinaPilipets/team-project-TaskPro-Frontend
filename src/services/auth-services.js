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

// export const singUp = async (body) => {
//     const res = await axios.post('/api/auth/register', body)
//     setAuthHeader(res.data.token)
//     return res;
// };

export const singUp = createAsyncThunk(
    '/auth/register',
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
    // return await axios.post('/api/auth/register', body)



// export const logIn = async (body) => {
//     const res = await axios.post('/api/auth/login', body)
//     setAuthHeader(res.data.token)
//     return res;

//     // return await axios.post('/api/auth/login', body)
// }

export const logIn = createAsyncThunk(
    '/auth/login',
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
)

// export const logOut = async () => {
//     await axios.post('/api/auth/logout')
//     clearAuthHeader()
// }
export const logOut = createAsyncThunk(
    '/auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/api/auth/logout')
            clearAuthHeader()
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)


// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//     try {
//       await axios.post('/users/logout');
//       // After a successful logout, remove the token from the HTTP header
//       clearAuthHeader();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   });
  

