import axios from "axios"
import { API_URL } from "../../config"

export const AuthService =  {
    async register() {
        const data = await axios.post(`${API_URL}/registered`)

        return data
    },
}