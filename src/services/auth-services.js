import axios from "axios";

axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

export const singUp = async (body) => {
    return await axios.post('/users/register', body)
}

export const logIn = async (body) => {
    return await axios.post('/users/login', body)
}