import { useQuery } from "react-query"
import { AnimeService } from "../../services/AnimeData.service"

export const usePromos = (id) => {
    const { data, isLoading, isError } = useQuery(
        ['promo', id],
        () => AnimeService.getPromo(id),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.banner[0],
            enabled: !!id
        }
    )
    return { isLoading, isError, data }
}