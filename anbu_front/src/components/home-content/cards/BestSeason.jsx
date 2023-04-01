import styles from './cards-carousel.module.css'

import CardsCarousel from './CardsCarousel';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { useAnimes } from '../../../hooks/useAnimes';
import CardsBoxSkeleton from '../../skeletons/cards-box-skeleton/CardsBoxSkeleton';


const BestSeason = ({ }) => {

    const { isLoading, isError, data } = useAnimes()



    // if (isLoading) {
    //     return <h3>Loading..</h3>
    // }
    // if (isError) {
    //     return <h3>Loading..</h3>
    // }
    // if (!data) {
    //     return <h3>Loading..</h3>
    // }


    return (
        <>
            <div>
                {isLoading ? <CardsBoxSkeleton /> :
                    <div className="dfsa">
                        <div className={styles.headingWrapper}>
                            <div className={styles.feedHeading}>
                                <h2 className={styles.feedHeadingTitle}>Найкращі аніме цього сезону!</h2>
                                <p className={styles.feedHeadingText}>Найкраще серед кращого!</p>
                                <div className={`${styles.feedHeadingShalf} ${styles.bestShalf}`}></div>
                            </div>
                        </div>
                        <CardsCarousel>
                            {isLoading && <p>Loading...</p>}
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
                                                        <img
                                                            // loading='lazy'
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
                        </CardsCarousel>
                    </div>
                }
            </div>
        </>
    )
}

export default BestSeason