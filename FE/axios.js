import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // ✅ Ensures cookies are always sent
});

export default api;
