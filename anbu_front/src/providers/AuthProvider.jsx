import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";

const AuthContext = createContext({
    currentUser: {},
    setCurrentUser: null,
    userToken: () => { },
    setUserToken: () => { }
})



export const AuthProvider = ({ children }) => {
    const { data, isLoading } = useCurrentUser()
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '')

    useEffect(() => {
        if (!isLoading) {
            setCurrentUser(data.data)
            console.log(currentUser.name)

        }
    })

    // if(isLoading) {
    //     return null
    // }




    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem('TOKEN', token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token)
    }

    return (
        <AuthContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const userAuthContext = () => useContext(AuthContext)