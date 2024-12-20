import styles from './promo-banner.module.css'

import { usePromos } from '../../../../hooks/anime/usePromos'
import { NavLink } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ROUTES } from '../../../../router/routes'

const BannerPromo = ({ id }) => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { isLoading, isError, data: promo } = usePromos(id)

    return (
        <div>
            <div className={styles.contentWrapper}>
                <div className={styles.promo}>
                    <div className={styles.imgWrapper}>
                        {isLoading ? '' :
                            <NavLink to={ROUTES.animePage(promo.anime_id, promo.alias)}>
                                <picture>
                                    <LazyLoadImage
                                        src={`${ROOT_URL}${promo.promo_path}`}
                                        alt=""
                                        title={promo.ua_title}
                                    />
                                </picture>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerPromo