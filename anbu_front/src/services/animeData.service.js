import axios from "axios"
import { API_URL } from "../../config"

export const AnimeService =  {
    async getAll() {
        const data = await axios.get(`${API_URL}/anime`)

        return data.data
    },

    async getById(id) {
        const data = await axios.get(`${API_URL}/anime/${id}`)

        return data.data
    },

    async getGenres() {
        const data = await axios.get(`${API_URL}/anime/genres/list`)

        return data.data
    },
}
