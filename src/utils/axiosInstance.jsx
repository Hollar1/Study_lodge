import axios from "axios";
import Cookies from "js-cookie";
const axiosInstance = axios.create({
  baseURL: "https://study-lodge-api.onrender.com/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userToken = Cookies.get("userToken");
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;
