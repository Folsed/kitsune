import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";


export const useAnimeComments = (id) => {
    const { data, isLoading, isError, refetch } = useQuery(
        ['comments', id],
        () => AnimeService.getComments(id),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data,
            enabled: !!id,
            refetchInterval: 10000,
        }
    )
    return { isLoading, isError, data, refetch }
}