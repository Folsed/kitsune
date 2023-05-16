import { useState } from "react";
import { useMutation } from "react-query";
import axiosClient from "../../axios-client";
import { userAuthContext } from "../../providers/AuthProvider";


export const useLogin = (setActive) => {
    const [errors, setErrors] = useState()
    const { setCurrentUser, setUserToken, setWatchlist } = userAuthContext()


    const login = useMutation(
        'login',
        async (formData) => {
            await axiosClient.post('/login', formData)
                .then(({ data }) => {
                    setCurrentUser(data.user)
                    setUserToken(data.token)
                    setActive(false)
                    setWatchlist(data.mylist)
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                    }
                })
        }

    )
    return { login, errors, setErrors }
}