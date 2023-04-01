import axios from "axios"
import { useQuery } from "react-query"
import axiosClient from "../axios-client"
import { AuthService } from "../services/auth.service"

export const useCurrentUser = () => {
    const { data, isLoading, isError } = useQuery(
        'currentUser',

        async () => axiosClient.get('/user'),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        }
    )
    return { isLoading, isError, data }
}

