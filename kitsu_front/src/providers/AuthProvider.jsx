import { createContext, useContext, useEffect, useState } from "react";
import { SHA256, AES, enc } from 'crypto-js'


const AuthContext = createContext({
    currentUser: {},
    setCurrentUser: null,
    userToken: () => { },
    setUserToken: () => { }
})



export const AuthProvider = ({ children }) => {
    const [currentUser, _setCurrentUser] = useState('')
    const [userToken, _setUserToken] = useState('')
    const [watchlist, _setWatchlist] = useState('')

    useEffect(() => {
        const parsedUserData = localStorage.getItem('user_traits')
        const decryptedUserData = parsedUserData
            ? AES.decrypt(parsedUserData, 'user').toString(enc.Utf8)
            : ''

        const parsedWatchlist = localStorage.getItem('mylist')
        const decryptedWatchlist = parsedWatchlist
            ? AES.decrypt(parsedWatchlist, 'watchlist').toString(enc.Utf8)
            : ''

        _setCurrentUser(decryptedUserData ? JSON.parse(decryptedUserData) : '')
        _setUserToken(localStorage.getItem('TOKEN') || '')
        _setWatchlist(decryptedWatchlist ? JSON.parse(decryptedWatchlist) : '')
    }, [])



    const setCurrentUser = (data) => {
        const encryptedUser = AES.encrypt(JSON.stringify(data), 'user').toString()
        if (encryptedUser) {
            localStorage.setItem('user_traits',encryptedUser)
        } else {
            localStorage.removeItem('user_traits')
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
        if (encryptedWl) {
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