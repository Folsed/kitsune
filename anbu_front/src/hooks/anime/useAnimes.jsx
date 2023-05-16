import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";


export const useAnimes = () => {
    const { data, isLoading, isError } = useQuery(
        ['anime', 'all'],
        async () => await AnimeService.getAll(),
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