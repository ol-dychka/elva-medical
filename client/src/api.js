// src/api.js
import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust if your backend is hosted elsewhere
});

// Attach access token (if available) to each request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt"); // Or use cookies if preferred
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
