import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

// axiosClient.defaults.withCredentials = true


axiosClient.interceptors.request.use((config) => {
    const token = '123sdfsdfsd4'
    config.headers.Authorization = `Bearer ${token}`
    return config
})

axiosClient.interceptors.response.use(response => {
    return response
})

export default axiosClient