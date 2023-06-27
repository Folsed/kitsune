import styles from './banner-skeleton.module.css'
import skeleton from '../skeleton-animation.module.css'

const ColoredBannerSkeleton = () => {
    return (
        <>
            <div className={styles.leftInfo}>
                <div className={styles.promo}>
                    <div className={`${styles.content} ${skeleton.loading}`}></div>
                </div>
                <div className={styles.preview}>
                    <div className={`${styles.previewAsc} ${skeleton.loading}`}></div>
                </div>
            </div>
            <div className={styles.rightInfo}>
                <div className={styles.title}>
                    <div className={`${styles.content} ${skeleton.loading}`}></div>
                </div>
                <div className={styles.synopsis}>
                    <div className={`${styles.content} ${skeleton.loading}`}></div>
                </div>
                <div className={styles.btns}>
                    <div className={styles.btnLeft}>
                        <div className={`${styles.content} ${skeleton.loading}`}></div>
                    </div>
                    <div className={styles.btnRight}>
                        <div className={`${styles.content} ${skeleton.loading}`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColoredBannerSkeleton