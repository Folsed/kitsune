import React, { useState } from 'react'
import axiosClient from '../../axios-client'
import { useQuery } from 'react-query'

const useWatchlistGet = (userId) => {
    const { data, isLoading, refetch } = useQuery(
        ['watchlist', userId],
        async () => await axiosClient.get(`/watchlist/get/${userId}`),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            enabled: !!userId,
            select: ({ data }) => data.mylist
        },
        
        
    )
    return { data, isLoading, refetch }
}

export default useWatchlistGet