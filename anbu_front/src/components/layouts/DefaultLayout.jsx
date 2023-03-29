import './../../index.css'

import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { userAuthContext } from '../../poviders/AuthProvider'

const DefaultLayout = () => {
    const { currentUser, userToken }= userAuthContext()

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