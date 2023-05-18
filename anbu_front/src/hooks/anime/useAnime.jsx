import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";


export const useAnime = (id) => {
    const { data, isLoading, isError } = useQuery(
        ['anime', id],
        async () => await AnimeService.getById(id),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data,
            // enabled: !!id

        }
    )
    return { isLoading, isError, data }
}