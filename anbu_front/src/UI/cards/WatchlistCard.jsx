import { RiStarFill } from 'react-icons/ri'
import styles from './card.module.css'
import { ROUTES } from '../../router/routes'
import { NavLink } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const WatchlistCard = ({ data }) => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL

    return (
        <div className={`${styles.contentContainer}`}>
            <div className={styles.extra}>
                <NavLink to={ROUTES.animePage(data.id, data.alias)}>
                    <div className={styles.wlInnerContentContainer}>
                        <div className={styles.wlPreview}>
                                <LazyLoadImage
                                    src={`${ROOT_URL}${data.second_preview_path}`}
                                    effect='blur'
                                    alt=""
                                    title={data.ua_title}
                                />
                        </div>
                        <div className={styles.wlDescription}>
                            <h4>{data.ua_title}</h4>
                            <div className={styles.innerSubDesc}>
                                <div className={styles.ratingBox}>
                                    <div className={styles.star}><RiStarFill /></div> {data.review.stars}
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}


export default WatchlistCard