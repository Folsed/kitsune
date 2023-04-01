import { useState } from "react";
import { useMutation } from "react-query";
import axiosClient from "../axios-client";
import { userAuthContext } from "../providers/AuthProvider";


export const useRegistration = (setActive) => {
    const [errors, setErrors] = useState()
    const {setCurrentUser, setUserToken} = userAuthContext()


    const registration = useMutation(
        'registration',
        async (formData) => {
            axiosClient.post('/registered', formData)
                .then(({ data }) => {
                    setCurrentUser(data.user)
                    setUserToken(data.token)
                    setActive(false)
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                    }
                })
        }

    )
    return { registration, errors, setErrors }
}