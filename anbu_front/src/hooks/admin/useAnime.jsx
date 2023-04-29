import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";


export const useAnime = (id) => {
    const { data, isLoading, isError} = useQuery(
        ['anime', id],
        () => AnimeService.getById(id),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
            select: ({ data }) => data,
            enabled: !!id

        }
    )
    return { isLoading, isError, data}
}