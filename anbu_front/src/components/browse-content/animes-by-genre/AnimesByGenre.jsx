import { NavLink, useParams } from 'react-router-dom'
import styles from './../browse.module.css'
import { ROUTES } from '../../../router/routes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import EveryCardsBoxSkeleton from '../../skeletons/every-cards-skeleton/EveryCardsBoxSkeleton'
import { useAnimesByGenre } from '../../../hooks/anime/useAnimesByGenre'
import AnimeCard from '../../../UI/cards/AnimeCard'

const AnimesByGenre = () => {
    const { genre } = useParams()
    const { data, isLoading, isError } = useAnimesByGenre(genre)
    console.log(data)

    return (
        <>
            {isLoading ? <EveryCardsBoxSkeleton /> :
                <>
                    <div className={styles.heading}>
                        <h1>Аніме за жанром {data.genre[0].name}</h1>
                    </div>
                    <div className={styles.container}>
                        {data.animes.map((item) => (
                            <AnimeCard key={item.id} data={item} />
                        ))}
                    </div>
                </>

            }
        </>
    )
}

export default AnimesByGenre