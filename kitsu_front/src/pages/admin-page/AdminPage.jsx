import './admin-page.css'

import { Navigate } from 'react-router-dom'
import { userAuthContext } from '../../providers/AuthProvider'
import { ROUTES } from '../../router/routes'
import Navigation from '../../components/admin-content/navigation/Navigation'
import { useContext, useState } from 'react'
import AnimeNav from '../../components/admin-content/actions/anime/nav/AnimeNav'
import AnimeAction from '../../components/admin-content/actions/anime/AnimeAction'
import CarouselNav from '../../components/admin-content/actions/carousel/nav/CarouselNav'
import CarouselAction from '../../components/admin-content/actions/carousel/CarouselAction'
import BannersNav from '../../components/admin-content/actions/banners/nav/BannersNav'
import BannersAction from '../../components/admin-content/actions/banners/BannersAction'
import AdminContext from '../../providers/AdminProvider'


const AccountPage = () => {
    const { currentUser, userToken } = userAuthContext()
    const [active, setActive] = useState('anime')
    const [action, setAction] = useState('anime-tables')
    const [subAction, setSubAction] = useState('')



    if (!userToken) {
        return <Navigate to={ROUTES.home} replace={true} />
    }
    if (currentUser.roles[0].name !== 'Administrator') {
        // Here I can add an error page
        return <Navigate to={ROUTES.home} replace={true} />
    }

    return (
        <AdminContext.Provider value={{ active, setActive, action, setAction, subAction, setSubAction }} >
            <div className='admin-page__wrapper'>
                <div className="admin-page__grid">
                    <Navigation />
                    <div className="admin-page_dynamic-menu">
                        {active === 'anime' ?
                            <AnimeNav />
                            :
                            active === 'carousel' ?
                                <CarouselNav />
                                :
                                active === 'banners' ?
                                    <BannersNav />
                                    : ''
                        }

                    </div>
                    <div className="admin-page_action">
                        {active === 'anime' ?
                            <AnimeAction />
                            :
                            active === 'carousel' ?
                                <CarouselAction />
                                :
                                active === 'banners' ?
                                    <BannersAction />
                                    :
                                    ''
                        }
                    </div>
                </div>
            </div>
        </AdminContext.Provider>
    )
}

export default AccountPage