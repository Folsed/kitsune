import './admin-page.css'

import { Navigate } from 'react-router-dom'
import { userAuthContext } from '../../providers/AuthProvider'
import { ROUTES } from '../../router/routes'
import Navigation from '../../components/admin-content/navigation/Navigation'
import { useContext, useState } from 'react'
import AnimeNav from '../../components/admin-content/actions/anime/nav/AnimeNav'
import AnimeContext from '../../providers/AnimeProvider'
import AnimeAction from '../../components/admin-content/actions/anime/AnimeAction'


const AccountPage = () => {
    const { currentUser, userToken } = userAuthContext()
    const [active, setActive] = useState('anime')
    const [action, setAction] = useState('anime-tables')


    if (!userToken) {
        return <Navigate to={ROUTES.home} replace={true} />
    }
    if (currentUser.roles[0].name !== 'Administrator') {
        // Here I can add an error page
        return <Navigate to={ROUTES.home} replace={true} />
    }

    return (
        <AnimeContext.Provider value={{ active, setActive, action, setAction }} >
            <div className='admin-page__wrapper'>
                <div className="admin-page__grid">
                    <Navigation />
                    <div className="admin-page_dynamic-menu">
                        {active === 'anime' ?
                            <AnimeNav />
                            :
                            active === 'news' ? 'news' : ''
                        }

                    </div>
                    <div className="admin-page_action">
                        {active === 'anime' ?
                            <AnimeAction />
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
        </AnimeContext.Provider>
    )
}

export default AccountPage