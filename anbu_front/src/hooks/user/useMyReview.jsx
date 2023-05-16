import axiosClient from '../../axios-client'
import { useQuery } from 'react-query'
import { userAuthContext } from '../../providers/AuthProvider'

const useMyReview = (animeId) => {
    const { userToken } = userAuthContext()

    const { data, isLoading, refetch } = useQuery(
        ['myreview', animeId],
        async () => await axiosClient.get(`/review/solo/${animeId}/myReview`),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            enabled: !!userToken,
            select: ({ data }) => data.stars[0]
        },


    )
    return { data, isLoading, refetch }
}

export default useMyReview