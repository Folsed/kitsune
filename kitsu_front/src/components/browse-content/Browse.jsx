import './browse.module.css'

import Animes from './animes-every/Animes'
import { useLocation, useParams } from 'react-router-dom'
import { ROUTES } from '../../router/routes'
import AnimesByGenre from './animes-by-genre/AnimesByGenre'

const Browse = () => {
    const location = useLocation()
    const { genre } = useParams()

    return (
        <>
            {
                location.pathname === ROUTES.anime ? <Animes />
                    :
                    location.pathname === ROUTES.animeByGenre(genre) ? <AnimesByGenre/>
                        :
                        ''
            }

        </>
    )
}

export default Browse