import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";
import axiosClient from '../../axios-client'


export const useAnimeSeries = (id) => {
    const { data, isLoading, isError } = useQuery(
        ['series', id],
        async () => await axiosClient.get(`series/anime/get/${id}`),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.series,
            // enabled: !!id

        }
    )
    return { isLoading, isError, data }
}