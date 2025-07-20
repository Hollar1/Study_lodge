import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://study-lodge-api.onrender.com/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;
