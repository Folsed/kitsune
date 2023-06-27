import { useState } from "react";
import { useMutation } from "react-query";
import axiosClient from "../../axios-client";
import useMyReview from "../user/useMyReview";
import { useAnimeReviews } from "./useAnimeReviews";


export const useAnimeCommentMutate = (animeId) => {
    const [errors, setErrors] = useState()
    const { refetch } = useAnimeReviews(animeId)
    const { refetch: refetchReview} = useMyReview(animeId)


    const comment = useMutation(
        'comment',
        async (formData) => {
            axiosClient.post('/review/leave_review', formData)
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
