import { createContext, useContext, useEffect, useState } from "react";
import { SHA256, AES, enc } from 'crypto-js'


const AuthContext = createContext({
    currentUser: {},
    setCurrentUser: null,
    userToken: () => { },
    setUserToken: () => { }
})



export const AuthProvider = ({ children }) => {
    const parsedUserData = JSON.parse(localStorage.getItem('USER_INFO'))
    const parsedWatchlist = localStorage.getItem('mylist')
    const decryptedWatchlist = AES.decrypt(parsedWatchlist, 'watchlist').toString(enc.Utf8)

    const [currentUser, _setCurrentUser] = useState(parsedUserData || '')
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '')
    const [watchlist, _setWatchlist] = useState(JSON.parse(decryptedWatchlist) || '')



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

    const setWatchlist = (item) => {
        const encryptedWl = AES.encrypt(JSON.stringify(item), 'watchlist').toString()
        if (item) {
            localStorage.setItem('mylist', encryptedWl);
        } else {
            localStorage.removeItem('mylist')
        }
        _setWatchlist(item)
    }

    return (
        <AuthContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            watchlist,
            setWatchlist,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const userAuthContext = () => useContext(AuthContext)