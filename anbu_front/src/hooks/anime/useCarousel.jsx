import { useQuery } from "react-query";
import { AnimeService } from "../../services/AnimeData.service";


export const useCarousel = () => {
    const { data, isLoading, isError } = useQuery(
        'carousel',
        () => AnimeService.getCarouselContent(),
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