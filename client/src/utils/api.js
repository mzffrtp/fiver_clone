import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://127.0.01:8000/api",
    withCredentials: true
})

export default axiosApi