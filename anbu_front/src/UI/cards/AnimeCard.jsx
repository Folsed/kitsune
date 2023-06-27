import { RiStarFill } from 'react-icons/ri'
import styles from './card.module.css'
import { ROUTES } from '../../router/routes'
import { NavLink } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AnimeCard = ({ data }) => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL

    return (
        <div className={`${styles.contentContainer}`}>
            <div className={styles.extra}>
                <NavLink to={ROUTES.animePage(data.id, data.alias)} className={styles.cardLink} />
                <div className={styles.innerContentContainer}>
                    <div className={styles.preview}>
                        <picture>
                            <LazyLoadImage
                                src={`${ROOT_URL}${data.preview_path}`}
                                effect='blur'
                                alt=""
                                title={data.ua_title}
                            />
                        </picture>
                    </div>
                    <div className={styles.description}>
                        <h4>{data.ua_title}</h4>
                        <div className={styles.innerSubDesc}>
                            <div className={styles.ratingBox}>
                                <div className={styles.star}><RiStarFill /></div> {data.stars} | {data.genres[0].name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AnimeCard