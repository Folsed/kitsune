import { useState } from "react";
import { useMutation } from "react-query";
import axiosClient from "../../axios-client";
import { userAuthContext } from "../../providers/AuthProvider";


export const useLogout = () => {
    const { setCurrentUser, setUserToken, setWatchlist } = userAuthContext()


    const logout = useMutation(
        'logout',
        async () => {
            await axiosClient.post('/logout')
                .then(((res) => {
                    setCurrentUser(null)
                    setUserToken(null)
                    setWatchlist(null)
                }))
        }

    )
    return { logout }
}