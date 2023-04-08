import { useQuery } from "react-query";
import axiosClient from "../axios-client";

export const useAnimeSearch = ({title}) => {

    const searchParams = new URLSearchParams({
        title,
    })

    const { data, isLoading, isError } = useQuery(
        ['anime', 'search'],
        () => axiosClient.get(`/anime/search?${searchParams}`),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data,
            enabled: !!title,

        }
    )
    return { isLoading, isError, data }
}