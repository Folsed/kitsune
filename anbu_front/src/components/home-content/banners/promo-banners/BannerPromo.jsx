import styles from './promo-banner.module.css'

import aot from './../../../../img/nier-promo.png'


const BannerPromo = () => {
  return (
    <div>
        <div className={styles.contentWrapper}>
            <div className={styles.promo}>
                <a href="" className={styles.promoLink}>
                <div className={styles.imgWrapper}>
                    <picture>
                        <img src={aot} alt="" className="promo-banner__img" />
                    </picture>
                </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default BannerPromo