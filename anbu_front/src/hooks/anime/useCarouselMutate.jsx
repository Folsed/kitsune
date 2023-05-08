import { useState } from "react";
import { useMutation } from "react-query";
import axiosClient from "../../axios-client";


export const useCarouselMutate = () => {
    const [status, setStatus] = useState('')
    const carousel = useMutation(
        ['carousel', 'mutate'],
        async (formData) => {
            axiosClient.post('/carousel/anime/mutate', formData)
                .then(response => {
                    if(response.data.status === 'success') {
                        setStatus(response.data.status)
                    }
                })
                // .catch((error) => {
                //     if (error.response) {
                //         const finalErrors = error.response.data.errors
                //         setErrors(finalErrors)
                //     }
                // })
        },

    )
    return { carousel, status, setStatus }
}