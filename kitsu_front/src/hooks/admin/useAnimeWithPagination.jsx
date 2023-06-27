import { useQuery } from "react-query";
import axiosClient from "../../axios-client";


const useAnimeWithPagination = (size, page) => {
    const { data, isLoading, isError, refetch} = useQuery(
        ['anime', size, page],
        async () => await axiosClient.get(`/admin/get/anime?size=${size}&page=${page}`),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
            select: ({ data }) => data,

        }
    )
    return { isLoading, isError, data, refetch }
}

export default useAnimeWithPagination