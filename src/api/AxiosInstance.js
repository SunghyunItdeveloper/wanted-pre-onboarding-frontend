import axios from "axios";
import { API_URL } from "./constant";

const accessToken = localStorage.getItem("access_token")
const axiosinstance = axios.create({
  baseURL: { API_URL },
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  timeout: 10000,
});

export default axiosinstance;