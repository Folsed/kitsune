import { useMutation } from "react-query";
import axiosClient from "../../axios-client";
import { useState } from "react";


export const useAnimeCreate = () => {
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState('')


    const animeCreate = useMutation(
        'anime-create',
        async (formData) => {
            await axiosClient.post('/create/anime', formData)
                .then(response => {
                    setStatus(response.data.status)
                    setErrors([])
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                        setStatus('failure')
                        
                    }
                })
        },

    )
    return { animeCreate, errors, status, setStatus }
}