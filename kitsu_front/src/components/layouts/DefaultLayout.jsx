import './../../index.css'

import React, { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import AuthModalContext from '../../providers/AuthModalProvider'
import AccountContext from '../../providers/AccountProvider'
import { userAuthContext } from '../../providers/AuthProvider'
import EmailVerify from '../../UI/verification/EmailVerify'



const DefaultLayout = () => {
    // useEffect(() => {
    //     window.scrollTo({
    //       top: 0,
    //       left: 0,
    //       behavior: 'instant', // or 'instant'
    //       block: 'nearest' // or 'nearest'
    //     });
    //   }, [location]);

    return (
        <div>
            <Header />
            {/* <EmailVerify /> */}
            <ScrollRestoration />

            <main className="main">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default DefaultLayout