import axios from "axios"

const API_URL = import.meta.env.VITE_API_BASE_URL

export const AnimeService = {
    async getAll(size) {
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

    async searchAnime(searchParams) {
        const data = await axios.get(`${API_URL}/search/anime?${searchParams}`)

        return data.data
    },

    async getComments(id) {
        const data = await axios.get(`${API_URL}/comments/anime/${id}`)

        return data.data
    },

    async getByGenre(genre) {
        const data = await axios.get(`${API_URL}/anime/genre/${genre}`)

        return data.data
    },

    async getByQuery(queryParams) {
        const data = await axios.get(`${API_URL}/query/anime?${queryParams}`)

        return data.data
    },

    async getWithPagination(size, page) {
        const data = await axios.get(`${API_URL}/anime/?size=${size}&page=${page}`)

        return data.data
    },

    async getCarouselContent() {
        const data = await axios.get(`${API_URL}/carousel/anime`)

        return data.data
    },



}
