import './../../index.css'

import React, { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'



const DefaultLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant', // or 'instant'
          block: 'nearest' // or 'nearest'
        });
      }, [location]);

    return (
        <>
            <Header />
            {/* <ScrollRestoration /> */}

            <main className="main">
                <Outlet />
            </main>


            <Footer />
        </>
    )
}

export default DefaultLayout