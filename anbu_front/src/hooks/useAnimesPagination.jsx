import { useQuery } from "react-query";
import { AnimeService } from "../services/AnimeData.service";


export const useAnimesPagination = (size, page) => {
    const { data, isLoading, isError } = useQuery(
        ['anime', size, page],
        () => AnimeService.getWithPagination(size, page),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
            onError: (error) => {
                alert(error.message)
            },
            // select: ({ data }) => data

        }
    )
    return { isLoading, isError, data }
}