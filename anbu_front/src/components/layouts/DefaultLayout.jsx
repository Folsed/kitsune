import './../../index.css'

import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'



const DefaultLayout = () => {

    return (
        <>
            <Header />

            <main className="main">
                <Outlet />
            </main>


            <Footer />
        </>
    )
}

export default DefaultLayout