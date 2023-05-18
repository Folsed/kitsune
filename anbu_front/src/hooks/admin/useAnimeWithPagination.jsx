import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";
import axiosClient from "../../axios-client";


export const useAnimeWithPagination = (size, page) => {
    const { data, isLoading, isError, refetch} = useQuery(
        ['anime', size, page],
        async () => await axiosClient.get(`admin/get/anime/?size=${size}&page=${page}`),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
            select: ({ data }) => data,

        }
    )
    return { isLoading, isError, data, refetch }
}