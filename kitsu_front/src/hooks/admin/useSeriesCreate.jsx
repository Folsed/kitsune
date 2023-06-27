import React, { useState } from 'react'
import axiosClient from "../../axios-client";
import { useMutation } from 'react-query';


const useSeriesCreate = () => {
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState('')
    const [progress, setProgress] = useState()


    const seriesCreate = useMutation(
        ['anime', 'create-series'],
        async (formData) => {
            await axiosClient.post('/series/anime/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: data => {
                    setProgress(Math.round((100 * data.loaded) / data.total))
                  },
            })
                .then(response => {
                    setStatus(response.data.status)
                    setErrors([])
                })
                .catch((error) => {
                    if (error.response) {
                        const finalErrors = error.response.data.errors
                        setErrors(finalErrors)
                        setStatus('failure')

                    }
                })
        },

    )
    return { seriesCreate, errors, status, setStatus, progress }
}

export default useSeriesCreate