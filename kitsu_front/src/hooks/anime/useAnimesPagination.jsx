import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";


export const useAnimesPagination = (size, page) => {
    const { data, isLoading, isError, refetch } = useQuery(
        ['anime', size, page],
        () => AnimeService.getWithPagination(size, page),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
        }
    )
    return { isLoading, isError, data, refetch }
}