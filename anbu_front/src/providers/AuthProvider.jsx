import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    currentUser: {},
    setCurrentUser: null,
    userToken: () => {},
    setUserToken: () => {}
})



export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: 'Folsedasd',
        email: 'folsed@gmail.com'
    })
    const [userToken, setUserToken] = useState('')

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