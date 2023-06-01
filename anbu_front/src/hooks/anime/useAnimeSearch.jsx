import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";

export const useAnimeSearch = (query) => {

    const searchParams = new URLSearchParams({
        query,
    })

    const { data, isLoading, isError, status} = useQuery(
        ['anime', query],
        () => AnimeService.searchAnime(searchParams),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.animes,
            enabled: !!query,

        }
    )
    return { isLoading, isError, data, status }
}