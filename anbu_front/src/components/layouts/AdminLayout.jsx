import './../../index.css'

import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Header from '../header/Header'



const DefaultLayout = () => {


    return (
        <div>
            <Header />
            <ScrollRestoration />
            <main className="main">
                <Outlet />
            </main>
            <span style={{color: '#dadada29', marginTop: '5rem',}}>Administrative panel</span>
        </div>
    )
}

export default DefaultLayout