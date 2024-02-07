import axios from "axios";

const api = axios.create({
  baseURL: "https://taskmanager-g7p6.onrender.com/api",
});
export default api;
