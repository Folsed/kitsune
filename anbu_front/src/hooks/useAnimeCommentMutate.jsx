import { useState } from "react";
import { useMutation } from "react-query";
import axiosClient from "../axios-client";
import { userAuthContext } from "../providers/AuthProvider";
import { useAnimeComments } from "./useAnimeComments";


export const useAnimeCommentMutate = (animeId) => {
    const [errors, setErrors] = useState()
    const { refetch } = useAnimeComments(animeId)
    const {setCurrentUser, setUserToken} = userAuthContext()


    const comment = useMutation(
        'comment',
        async (formData) => {
            axiosClient.post('/comment/leave', formData)
                .then(response => {
                    if(response.data.status === 'success') {
                        refetch()
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                    }
                })
        },

    )
    return { comment, errors, setErrors }
}