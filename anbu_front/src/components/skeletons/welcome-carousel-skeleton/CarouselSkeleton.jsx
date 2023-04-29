import styles from './carousel-skeleton.module.css'
import skeleton from '../skeleton-animation.module.css'


const CarouselSkeleton = () => {
    return (
        <div className={styles.carouselWrapper}>
            <div className={`${styles.carouselTrack} ${skeleton.loading}`}></div>
            <div className={styles.carouselTabsWrapper}>
                {Array(6).fill(null).map((_, index) => (
                    <div key={index} className={`${styles.carouselTab} ${skeleton.loading}`}></div>
                ))}
            </div>
        </div>
    )
}

export default CarouselSkeleton