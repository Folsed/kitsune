import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";


export const useGenres = () => {
    const { data, isLoading, isError } = useQuery(
        ['genres', 'all'],
        () => AnimeService.getGenres(),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data

        }
    )
    return { isLoading, isError, data }
}