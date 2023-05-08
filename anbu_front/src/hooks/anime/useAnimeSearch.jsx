import { useQuery } from "react-query";
import axiosClient from "../../axios-client";
import axios from "axios";
import { AnimeService } from "../../services/AnimeData.service";

export const useAnimeSearch = (title) => {

    const searchParams = new URLSearchParams({
        title,
    })

    const { data, isLoading, isError, status} = useQuery(
        ['anime', title],
        () => AnimeService.searchAnime(searchParams),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.animes,
            enabled: !!title,

        }
    )
    return { isLoading, isError, data, status }
}