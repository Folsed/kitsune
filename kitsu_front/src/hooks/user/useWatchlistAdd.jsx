import React from 'react'
import { useMutation } from 'react-query'
import axiosClient from "../../axios-client";
import { userAuthContext } from '../../providers/AuthProvider';


const useWatchlistAdd = (refetch) => {
    const { setWatchlist } = userAuthContext()
    const watchlist = useMutation(
        ['watchlist', 'add'],
        async (formData) => {
            await axiosClient.post('/watchlist/mylist', formData)
                .then(({ data }) => {
                    setWatchlist(data.mylist)
                    refetch ? refetch() : null
                })
        },

    )
    return { watchlist }
}

export default useWatchlistAdd