import styles from './description.module.css'
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import DescriptionSkeleton from '../../skeletons/anime-page-skeleton/DescriptionSkeleton'
import { ROUTES } from '../../../router/routes'
import WatchlistButton from '../../../UI/buttons/WatchlistButton'
import Stars from '../../../UI/review/Stars'
import { AiOutlineUnorderedList } from "react-icons/ai";
import AccountContext from '../../../providers/AccountProvider'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AnimeContext from '../../../providers/AnimeProvider'
import AuthModalContext from '../../../providers/AuthModalProvider'
import { userAuthContext } from '../../../providers/AuthProvider'
import { OrangeButton } from '../../../UI/buttons/OrangeButton'
import TrailerModal from './TrailerModal'

const Description = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const animeData = useContext(AnimeContext)
    const { currentUser } = userAuthContext()
    const { setActiveTab } = useContext(AccountContext)
    const { setActive, setToggleClass } = useContext(AuthModalContext)
    const [trailerActive, setTrailerActive] = useState(false)

    const data = animeData.data

    const loginHandler = (e) => {
        e.preventDefault()
        setActive(true)
        setToggleClass('auth')
    }

    if (trailerActive) {
        document.body.classList.add('scroll-blocked')
    } else {
        document.body.classList.remove('scroll-blocked')
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
                                <div className={styles.secondHeading}>
                                    <span>{data.en_title}</span>
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
                                        <WatchlistButton animeId={data.id} />
                                        <NavLink
                                            to={ROUTES.account}
                                            onClick={currentUser ? () => setActiveTab(2) : loginHandler}
                                            className={styles.mylistLink}
                                        >
                                            <button className={styles.mylistButton}><AiOutlineUnorderedList size={22} />
                                                Переглянути мій список
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className={styles.synopsis}>
                                    <p className={styles.synBlockText}>
                                        {data.synopsis.split('\n').map((paragraph, index) => (
                                            <React.Fragment key={index}>
                                                {paragraph}
                                                <br />
                                            </React.Fragment>
                                        ))}
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
                                <LazyLoadImage
                                    className={styles.headingPreview}
                                    src={`${ROOT_URL}${data.preview[0].second_preview_path}`}
                                />
                                <OrangeButton
                                    title={'Переглянути трейлер'}
                                    className={styles.trailerButton}
                                    onClick={() => setTrailerActive(true)}
                                />
                                {trailerActive ?
                                    <TrailerModal setActive={setTrailerActive} link={data.trailer} />
                                    : ''}
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Description