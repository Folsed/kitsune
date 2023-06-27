import { useQuery } from "react-query";
import axiosClient from "../../axios-client";


export const useAnimeTableSearch = ({title}) => {

    const searchParams = new URLSearchParams({
        title,
    })

    const { data, isLoading, isError, status} = useQuery(
        ['anime', title],
        () => axiosClient.get(`table/search/anime?${searchParams}`),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data,
            enabled: !!title,

        }
    )
    return { isLoading, isError, data, status }
}