import { useMutation } from "react-query";
import axiosClient from "../../axios-client";


export const useAnimeDestroy = (refetch) => {
    const animeDestroy = useMutation(
        ['destroy', 'anime'],
        async (payload) => {
            axiosClient.post(`/destroy/anime`, payload)
                .then(((res) => {
                    refetch()
                }))
        }
    )
    return { animeDestroy }
}