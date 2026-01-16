import axios from 'axios';
import { baseURL } from '../api/consts';
import { getAccessToken } from '../utils/localstorage';

export const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        console.error('API Error:', message);

        if (error.response?.status === 401) {
            // Optional: Handle token expiration (e.g., logout or refresh)
            // window.location.href = '/login'; // Use with caution to avoid loops
        }

        return Promise.reject(error);
    }
);
