import { useQuery } from "react-query";
import axiosClient from "../../axios-client";


export const usePronouns = () => {
    const { data, isLoading } = useQuery(
        ['pronouns', 'all'],
        () => axiosClient.get('/user/pronouns'),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            onError: (error) => {
                alert(error.message)
            },
            select: ({ data }) => data.data.pronouns

        }
    )
    return { isLoading, data }
}