import styles from './cards-carousel.module.css'

import CardsCarousel from './CardsCarousel';
import CardsBoxSkeleton from '../../skeletons/cards-box-skeleton/CardsBoxSkeleton';
import { useAnimesByGenre } from '../../../hooks/anime/useAnimesByGenre';
import { useAnimesByQuery } from '../../../hooks/anime/useAnimesByQuery';
import AnimeCard from '../../../UI/cards/AnimeCard';

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
                                <AnimeCard key={item.id} data={item} />
                            ))}
                        </CardsCarousel>
                    </div>

                }
            </div>
        </>
    )
}

export default CardsTrack