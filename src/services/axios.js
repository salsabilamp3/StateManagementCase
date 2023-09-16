import axios from 'axios';
import { store } from '../redux/store';
// Create an Axios instance
const axiosHttp = axios.create({
  baseURL: 'https://dummyjson.com', // Replace with your API's base URL
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    Authorization: store.getState().auth,
    'Content-Type': 'application/json',
  },
});

axiosHttp.interceptors.request.use(
  (config) => {
    const { token } = store.getState().auth;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export { axiosHttp };
