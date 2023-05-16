import { useQuery } from "react-query"
import { AnimeService } from "../../services/AnimeData.service"

const useBanner = (id) => {
    const { data, isLoading, isError } = useQuery(
        ['banner', id],
        () => AnimeService.getBanner(id),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.banner[0],
            enabled: !!id
        }
    )
    return { isLoading, isError, data }
}

export default useBanner