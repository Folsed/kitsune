import { useState } from "react"
import { useMutation } from "react-query"
import axiosClient from "../../axios-client"

const usePromoBannerCreate = () => {
    const [errors, setErrors] = useState()
    const [status, setStatus] = useState('')

    const promoCreate = useMutation(
        'promo-create',
        async (formData) => {
            axiosClient.post('/create/banner/promo', formData)
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
    return { promoCreate, errors, status, setStatus }
}

export default usePromoBannerCreate