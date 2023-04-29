import { useMutation } from "react-query";
import axios from "axios";
import axiosClient from "../../axios-client";
import { AnimeService } from "../../services/AnimeData.service";
import { useState } from "react";


export const useAnimeCreate = () => {
    const [errors, setErrors] = useState()
    const [status, setStatus] = useState('')

    const animeCreate = useMutation(
        'anime-create',
        async (formData) => {
            axiosClient.post('/create/anime', formData)
                .then(response => {
                    setStatus(response.data.status)
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                        setStatus('failure')
                    }
                })
        },
        {
            onSuccess: () => {
                setErrors('')
            },
        }

    )
    return { animeCreate, errors, status, setStatus }
}