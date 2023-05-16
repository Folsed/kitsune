import { useState } from 'react'
import { userAuthContext } from '../../providers/AuthProvider'
import { useMutation } from 'react-query'
import axiosClient from '../../axios-client'

const useInfoUpdate = ({ setEditIsActive }) => {
    const [errors, setErrors] = useState()
    const { setCurrentUser, setUserToken } = userAuthContext()


    const userInfo = useMutation(
        ['user-info', 'update'],
        async (formData) => {
            await axiosClient.post('/user/info/update', formData)
                .then(response => {
                    setCurrentUser(response.data.user)
                    setEditIsActive(false)
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                    }
                })
        },

    )
    return { userInfo, errors, setErrors }
}

export default useInfoUpdate