import { useState } from "react";
import { useMutation } from "react-query";
import axiosClient from "../../axios-client";
import { userAuthContext } from "../../providers/AuthProvider";
import { useAnimeComments } from "./useAnimeComments";
import useMyReview from "../user/useMyReview";


export const useAnimeCommentMutate = (animeId) => {
    const [errors, setErrors] = useState()
    const { refetch } = useAnimeComments(animeId)
    const { refetch: refetchReview} = useMyReview(animeId)


    const comment = useMutation(
        'comment',
        async (formData) => {
            axiosClient.post('/comment/leave', formData)
                .then(response => {
                    if(response.data.status) {
                        refetch()
                        refetchReview()
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
