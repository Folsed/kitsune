import styles from './cards-carousel.module.css'

import CardsCarousel from './CardsCarousel';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import CardsBoxSkeleton from '../../skeletons/cards-box-skeleton/CardsBoxSkeleton';
import { useAnimesByGenre } from '../../../hooks/useAnimesByGenre';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAnimesByQuery } from '../../../hooks/useAnimesByQuery';


const CardsTrack = ({ query, title, subTitle, shalfColor, genre }) => {
    const { isLoading, data: carouselData } = genre ? useAnimesByGenre(genre) : useAnimesByQuery(query)

    return (
        <>
            <div>
                {isLoading ? <CardsBoxSkeleton /> :
                    <div className="dfsa">
                        <div className={styles.headingWrapper}>
                            <div className={styles.feedHeading}>
                                <h2 className={styles.feedHeadingTitle}>{title ? title : ''}</h2>
                                <p className={styles.feedHeadingText}>{subTitle ? subTitle : ''}</p>
                                <div
                                    className={styles.feedHeadingShalf}
                                    style={{
                                        background: shalfColor
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                        <CardsCarousel>
                            {(genre ? carouselData.animes : carouselData).map((item) => (
                                <div
                                    className={`${styles.contentContainer}`}
                                    key={item.id}
                                >

                                    <div className={styles.extra}>
                                        <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                            <div className={styles.innerContentContainer}>
                                                <div className={styles.preview}>
                                                    <LazyLoadImage
                                                        src={`http://127.0.0.1:8000/${item.preview_path}`}
                                                        effect='blur'
                                                        alt=""
                                                        title={item.ua_title}
                                                    />
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
                        </CardsCarousel>
                    </div>

                }
            </div>
        </>
    )
}

export default CardsTrack