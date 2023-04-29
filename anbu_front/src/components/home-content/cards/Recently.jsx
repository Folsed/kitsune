import styles from './cards-carousel.module.css'

import CardsCarousel from './CardsCarousel';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { useAnimes } from '../../../hooks/useAnimes';
import CardsBoxSkeleton from '../../skeletons/cards-box-skeleton/CardsBoxSkeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const Recently = () => {

    const { isLoading, isError, data } = useAnimes()
    
    return (
        <>
            <div>
                {isLoading ? <CardsBoxSkeleton/> :
                    <div className="dfsa">
                        <div className={styles.headingWrapper}>
                            <div className={styles.feedHeading}>
                                <h2 className={styles.feedHeadingTitle}>Нещодавні аніме релізи!</h2>
                                <p className={styles.feedHeadingText}>Дивіться найгарячіші аніме новинки цього сезону!</p>
                                <div className={styles.feedHeadingShalf}></div>
                            </div>
                        </div>
                        <CardsCarousel>
                            {data.map((item) => (
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
                                                            key={preview.id}
                                                            src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                            effect='blur'
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
                        </CardsCarousel>
                    </div>
                }
            </div>
        </>
    )
}

export default Recently