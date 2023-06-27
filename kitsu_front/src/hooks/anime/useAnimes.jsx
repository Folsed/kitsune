import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";
import axiosClient from "../../axios-client";


export const useAnimes = () => {
    const { data, isLoading, isError } = useQuery(
        ['anime', 'all'],
        async () => await axiosClient.get('/anime'),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.data

        }
    )
    return { isLoading, isError, data }
}