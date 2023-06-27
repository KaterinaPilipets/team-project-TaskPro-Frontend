import axios from "axios";

axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

const setAuthHeader = token => { 
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }; 
   
// Utility to remove JWT 
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const singUp = async (body) => {
    const res = await axios.post('/api/auth/register', body)
    setAuthHeader(res.data.token)
    return res;
};
    // return await axios.post('/api/auth/register', body)

export const logIn = async (body) => {
    const res = await axios.post('/api/auth/login', body)
    setAuthHeader(res.data.token)
    return res;

    // return await axios.post('/api/auth/login', body)
}

export const logOut = async () => {
    await axios.post('/api/auth/logout')
    clearAuthHeader()
}