import { NavLink, useParams } from 'react-router-dom'
import styles from './../browse.module.css'
import { ROUTES } from '../../../router/routes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import EveryCardsBoxSkeleton from '../../skeletons/every-cards-skeleton/EveryCardsBoxSkeleton'
import { useAnimesByGenre } from '../../../hooks/useAnimesByGenre'

const AnimesByGenre = () => {
    const { genre } = useParams()
    const { data, isLoading, isError } = useAnimesByGenre(genre)


    return (
        <>
            {isLoading ? <EveryCardsBoxSkeleton /> :
                <>
                    <div className={styles.heading}>
                        <h1>Аніме за жанром {data.genre[0].name}</h1>
                    </div>
                    <div className={styles.container}>
                        {data.animes.map((item) => (
                            <div
                                className={`${styles.contentContainer}`}
                                key={item.id}
                            >

                                <div className={styles.extra}>
                                    <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                        <div className={styles.innerContentContainer}>
                                            <div className={styles.preview}>
                                                {item.preview.map(preview => (
                                                    <LazyLoadImage
                                                        loading='lazy'
                                                        key={preview.id}
                                                        src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                        alt=""
                                                        title={item.ua_title}
                                                    />

                                                ))}
                                            </div>
                                            <div className={styles.description}>
                                                <h4>{item.ua_title}</h4>
                                                <div className={styles.innerSubDesc}>
                                                    <span>Серій: 12/12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </>

            }
        </>
    )
}

export default AnimesByGenre