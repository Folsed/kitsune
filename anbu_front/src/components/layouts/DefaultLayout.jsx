import './../../index.css'

import React, { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import AuthModalContext from '../../providers/AuthModalProvider'
import AccountContext from '../../providers/AccountProvider'



const DefaultLayout = () => {
    const location = useLocation()
    const [active, setActive] = useState(false)
    const [toggleClass, setToggleClass] = useState('')
    const [activeTab, setActiveTab] = useState(0)


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
            <AuthModalContext.Provider value={{ active, setActive, toggleClass, setToggleClass }}>
                <AccountContext.Provider value={{ activeTab, setActiveTab }}>
                    <Header />
                    <ScrollRestoration />

                    <main className="main">
                        <Outlet />
                    </main>


                    <Footer />
                </AccountContext.Provider>
            </AuthModalContext.Provider>
        </div>
    )
}

export default DefaultLayout