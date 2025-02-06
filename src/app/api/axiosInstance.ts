import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://assignment-todolist-api.vercel.app/api/swimmingriver",
});

export default axiosInstance;
