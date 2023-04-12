import './anime-page.css'
import { useParams } from 'react-router-dom'
import { useAnime } from '../../hooks/useAnime'
import AnimeContext from '../../providers/AnimeProvider'
// Components
import Header from '../../components/anime-content/header/Header'
import Description from '../../components/anime-content/description/Description'
import Player from '../../components/anime-content/player/Player'
import Comments from '../../components/anime-content/comments/Comments'

const Anime = () => {
    const { animeId } = useParams()

    const { isLoading, isError, data } = useAnime(animeId)
    

    const value = {
        isLoading,
        isError,
        data,
    }

    return (
        <AnimeContext.Provider value={value}>
            <div className="anime-page__wrapper">
                <Header />
                <Description/>
                <Player/>
                <Comments animeId={animeId}/>
            </div>
        </AnimeContext.Provider>
    )
}

export default Anime