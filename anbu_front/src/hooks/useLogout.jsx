import { useState } from "react";
import { useMutation } from "react-query";
import axiosClient from "../axios-client";
import { userAuthContext } from "../providers/AuthProvider";


export const useLogout = () => {
    const { setCurrentUser, setUserToken } = userAuthContext()


    const logout = useMutation(
        'logout',
        async () => {
            axiosClient.post('/logout')
                .then(((res) => {
                    setCurrentUser({})
                    setUserToken(null)
                }))
        }

    )
    return { logout }
}