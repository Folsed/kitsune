import './../../index.css'

import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Header from '../header/Header'
import { useState } from 'react'
import AuthModalContext from '../../providers/AuthModalProvider'



const DefaultLayout = () => {
    const [active, setActive] = useState(false)
    const [toggleClass, setToggleClass] = useState('')

    return (
        <div>
            <AuthModalContext.Provider value={{ active, setActive, toggleClass, setToggleClass }}>
                <Header />
                <ScrollRestoration />
                <main className="main">
                    <Outlet />
                </main>
                <span style={{ color: '#dadada29', marginTop: '5rem', }}>Administrative panel</span>
            </AuthModalContext.Provider>
        </div>
    )
}

export default DefaultLayout