import axios from "axios"
import { API_URL } from "../../config"

export const AuthService =  {
    async register(formData) {
        const data = await axios.post(`${API_URL}/registered`, formData)

        return data
    },
}