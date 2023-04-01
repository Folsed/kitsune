import { useMutation } from "react-query";
import { AnimeService } from "../services/AnimeData.service";
import axiosClient from "../axios-client";
import axios from "axios";
import { AuthService } from "../services/auth.service";


export const useLogin = () => {
    return useMutation(
        'registration',
        (formData) => {
            return axiosClient.post('/registered', formData)
            .then(res => res.data)
            .catch(err => {
                console.log(err)
            })
            
        }
    )
}