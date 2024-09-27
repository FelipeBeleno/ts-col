
import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: 'https://api-colombia.com/api/v1/',
});