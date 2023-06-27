import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";


export const useAnimesByGenre = (genre) => {
    const { data, isLoading, isError } = useQuery(
        ['animes', genre],
        () => AnimeService.getByGenre(genre),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data,
            enabled: !!genre,
        }
    )
    return { isLoading, isError, data }
}
