import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://web-production-6135b.up.railway.app';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
