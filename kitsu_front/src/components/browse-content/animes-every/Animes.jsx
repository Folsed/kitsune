import { NavLink } from 'react-router-dom'
import styles from './../browse.module.css'
import { ROUTES } from '../../../router/routes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import EveryCardsBoxSkeleton from '../../skeletons/every-cards-skeleton/EveryCardsBoxSkeleton'
import { useAnimes } from '../../../hooks/anime/useAnimes'
import AnimeCard from '../../../UI/cards/AnimeCard'

const Animes = () => {
    const { isLoading, data } = useAnimes()
    return (
        <div>
            {isLoading ? <EveryCardsBoxSkeleton /> :
                <div className={styles.container}>
                    {data.map((item) => (
                       <AnimeCard key={item.id} data={item} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Animes