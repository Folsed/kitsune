import { useMutation } from "react-query";
import { AnimeService } from "../services/AnimeData.service";
import axiosClient from "../axios-client";
import axios from "axios";
import { AuthService } from "../services/auth.service";


export const useLogin = () => {
    const { mutate, isLoading, isError } = useMutation(
        ['login'],
        (formData) => axiosClient.post('/registered', formData),
        {
            onError: (error) => {
                console.log(error);
            },
        }
    )
    return { mutate, isError, isLoading }
}