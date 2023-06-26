import axios from "axios";

axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

const setAuthHeader = token => { 
    axios.defaults.headers.common.Authorization = `Bearer ${token}`; 
    console.log(axios.defaults.headers.common.Authorization);
  }; 
   
// Utility to remove JWT 
const clearAuthHeader = () => { 
    console.log(axios.defaults.headers.common.Authorization);
    axios.defaults.headers.common.Authorization = '';
    console.log(axios.defaults.headers.common.Authorization);
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
    // return await axios.post('/api/auth/logout', body)
    await axios.post('/api/auth/logout')
    clearAuthHeader()
    // alert("Бугагага")
    // return;
}