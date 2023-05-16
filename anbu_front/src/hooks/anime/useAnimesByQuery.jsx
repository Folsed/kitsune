import { useQuery } from "react-query"
import { AnimeService } from "../../services/AnimeData.service"

export const useAnimesByQuery = (query) => {
    const queryParams = new URLSearchParams({
        query,
    })

    const { data, isLoading, isError, status} = useQuery(
        ['anime-query', query],
        () => AnimeService.getByQuery(queryParams),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.animes,
        }
    )
    return { isLoading, isError, data, status }
}