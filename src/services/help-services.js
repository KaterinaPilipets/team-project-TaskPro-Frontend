import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendEmail = createAsyncThunk(
  'helpModal/sendEmail',
  async (commentData, thunkAPI) => {
    try {
      await axios.post('/api/users/help', commentData);
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  }
);
