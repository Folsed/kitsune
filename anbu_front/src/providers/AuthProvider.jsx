import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    currentUser: {},
    setCurrentUser: null,
    userToken: () => { },
    setUserToken: () => { }
})



export const AuthProvider = ({ children }) => {
    const parsedUserData = JSON.parse(localStorage.getItem('USER_INFO'))
    
    const [currentUser, _setCurrentUser] = useState(parsedUserData || '')
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '')



    const setCurrentUser = (data) => {
        if (data) {
            localStorage.setItem('USER_INFO', JSON.stringify(data))
        } else {
            localStorage.removeItem('USER_INFO')
        }
        _setCurrentUser(data)
    }

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