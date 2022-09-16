import axios from "axios"

export const BASE_URL = 'https://vrajapi.herokuapp.com/'

export const myAxios = axios.create({
    baseURL : BASE_URL
})