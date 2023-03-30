import React from 'react'
import { Navigate } from 'react-router-dom'
import { userAuthContext } from '../../providers/AuthProvider'
import { ROUTES } from '../../router/routes'

const AccountPage = () => {
    const { currentUser, userToken } = userAuthContext()

    if(!userToken) {
        return <Navigate to={ROUTES.home} replace={true}/>
    }

    return (
        <div>AccountPage</div>
    )
}

export default AccountPage