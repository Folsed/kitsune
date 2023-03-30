import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosClient.interceptors.request.use((config) => {
    token = '1234'
    config.headers.Authorization = `Bearer ${token}`
    return config
})

axiosClient.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response && error.response.status === 401) {
        return error
    }
})

export default axiosClient