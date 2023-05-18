import { useMutation } from "react-query";
import axiosClient from "../../axios-client";


export const useAnimeDeactivate = (refetch) => {
    const animeDeactivate = useMutation(
        ['deactivate', 'anime'],
        async (payload) => {
            await axiosClient.post(`/deactivate/anime`, payload)
                .then((response) => {
                    if (response.data.status) {
                        refetch()
                    }
                })
        }
    )
    return { animeDeactivate }
}