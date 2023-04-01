import './../../index.css'

import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { userAuthContext } from '../../providers/AuthProvider'
import axiosClient from '../../axios-client'



const DefaultLayout = () => {
    const { currentUser, setCurrentUser, userToken } = userAuthContext()
    
    // console.log(currentUser)
    return (
        <>
            <p>Name: {currentUser.name}</p>
            <p>Token: {userToken}</p>
            <Header />

            <main className="main">
                <Outlet />
            </main>


            <Footer />
        </>
    )
}

export default DefaultLayout