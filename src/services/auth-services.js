import axios from "axios";
const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
})

export const singUp = async (body) => {
    return await instance.post('/users', body)
}

export const logIn = async (body) => {
    return await instance.post('/auth/login', body)
}