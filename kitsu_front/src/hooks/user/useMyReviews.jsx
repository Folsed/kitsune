import axiosClient from '../../axios-client'
import { useQuery } from 'react-query'
import { userAuthContext } from '../../providers/AuthProvider'

export const useMyReviews = (userId) => {
    const { data, isLoading, refetch } = useQuery(
        ['myreviews', userId],
        async () => await axiosClient.get(`/review/all/${userId}/myReviews`),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
            select: ({ data }) => data
        },


    )
    return { data, isLoading, refetch }
}