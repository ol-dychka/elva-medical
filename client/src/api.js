import axios from "axios";
import store from "./store/store";

// Create Axios instance
const api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
});

// Attach access token (if available) to each request
api.interceptors.request.use(
  (config) => {
    const token = store.getState().token.value;
    console.log("token interceptor : ", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
