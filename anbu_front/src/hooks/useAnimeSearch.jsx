import { useQuery } from "react-query";
import axiosClient from "../axios-client";
import axios from "axios";

export const useAnimeSearch = ({title}) => {

    const searchParams = new URLSearchParams({
        title,
    })

    const { data, isLoading, isError, status} = useQuery(
        ['anime', title],
        () => axios.get(`http://localhost:8000/api/search/anime?${searchParams}`),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: true,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.data.animes,
            enabled: !!title,

        }
    )
    return { isLoading, isError, data, status }
}