import axios from "axios";

const api = axios.create({
  baseURL: "https://vms-server-psi.vercel.app/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// Add request interceptor for logging (optional)
api.interceptors.request.use((config) => {
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
