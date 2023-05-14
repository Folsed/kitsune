import styles from './description.module.css'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import YouTube from 'react-youtube'
import AnimeContext from '../../../providers/AnimeProvider'
import DescriptionSkeleton from '../../skeletons/anime-page-skeleton/DescriptionSkeleton'
import { ROUTES } from '../../../router/routes'
import WatchlistButton from '../../../UI/buttons/WatchlistButton'
import Stars from '../../../UI/review/Stars'
import { AiOutlineUnorderedList } from "react-icons/ai";
import AccountContext from '../../../providers/AccountProvider'

const Description = () => {
    const animeData = useContext(AnimeContext)
    const { setActiveTab } = useContext(AccountContext)

    const data = animeData.data

    const opts = {
        height: '230',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },

    }

    return (
        <div>
            <div className={styles.body}>
                <div className={styles.contentWrapper}>
                    {animeData.isLoading ? <DescriptionSkeleton /> :
                        <div className={styles.content}>
                            <div className={styles.descSection}>
                                <div className={styles.heading}>
                                    <h1>{data.ua_title}</h1>
                                </div>
                                <div className={styles.voice}>
                                    <span>{data.translated}</span>
                                </div>
                                <div className={styles.starRating}>
                                    <div className={styles.rating}>
                                        <div className={styles.starsControls}>
                                            <Stars stars={data.review.stars} size={26} />
                                        </div>
                                        <div className={styles.avgRating}>
                                            <span>Середня оцінка:</span>
                                            <span className={styles.avgNumber}>{data.review.stars} ({data.review.reviews})</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.actions}>
                                    <div className={styles.actionBtns}>
                                        <WatchlistButton animeId={data.id} isLoading={animeData.isLoading} />
                                        <NavLink to={ROUTES.account} onClick={setActiveTab(2)} className={styles.mylistLink}>
                                            <button className={styles.mylistButton}><AiOutlineUnorderedList size={22} />
                                                Переглянути мій список
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className={styles.synopsis}>
                                    <p className={styles.synBlockText}>
                                        {data.synopsis}
                                    </p>
                                </div>
                                <div className={styles.genres}>
                                    <div className={styles.categs}>
                                        {data.genres.map((item) => (
                                            <div className={styles.categDetailWrap} key={item.id}>
                                                <NavLink to={ROUTES.animeByGenre(item.en_name.toLowerCase())}>
                                                    <div className={styles.categDetail}>
                                                        {item.name}
                                                    </div>
                                                </NavLink>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.detailTable}>
                                    <div className={styles.tableRow}>
                                        <div className={styles.leftCol}>
                                            <h4>Режисер: </h4>
                                        </div>
                                        <div className={styles.rightCol}>
                                            <h4>{data.director}</h4>
                                        </div>
                                    </div>
                                    <div className={styles.tableRow}>
                                        <div className={styles.leftCol}>
                                            <h4>Студія: </h4>
                                        </div>
                                        <div className={styles.rightCol}>
                                            <h4>{data.studio}</h4>
                                        </div>
                                    </div>
                                    <div className={styles.tableRow}>
                                        <div className={styles.leftCol}>
                                            <h4>Країна: </h4>
                                        </div>
                                        <div className={styles.rightCol}>
                                            <h4>{data.country}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.nextSection}>
                                <YouTube videoId={data.trailer} opts={opts} />
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Description