import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.authorization = JSON.parse(localStorage.getItem('token'));
      return config;
    },
    error => Promise.reject(error),
  );

export default axiosInstance;
