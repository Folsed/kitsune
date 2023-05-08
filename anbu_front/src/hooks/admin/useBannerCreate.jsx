import { useState } from "react"
import { useMutation } from "react-query"
import axiosClient from "../../axios-client"

const useBannerCreate = () => {
    const [errors, setErrors] = useState()
    const [status, setStatus] = useState('')

    const bannerCreate = useMutation(
        'banner-create',
        async (formData) => {
            axiosClient.post('/create/banner', formData)
                .then(response => {
                    setStatus(response.data.status)
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                        setStatus('failure')
                    }
                })
        },
        {
            onSuccess: () => {
                setStatus('')
                setErrors()
            },
        }

    )
    return { bannerCreate, errors, status, setStatus }
}

export default useBannerCreate