import CardSkeleton from '../card-skeleton/CardSkeleton'
import styles from './cards-skeleton.module.css'
import skeleton from './../skeleton-animation.module.css'


const EveryCardsBoxSkeleton = () => {
    return (
        <div className={styles.skeletonWrapper}>
            <div className={`${styles.skeletonTitle} ${skeleton.loading}`}></div>
            {/* <div className={`${styles.skeletonSubTitle} ${skeleton.loading}`}></div> */}
            <div className={styles.skeletonContainer}>
                {Array(24).fill(null).map((_, index) => (
                    <CardSkeleton key={index} />
                ))}

            </div>
        </div>
    )
}

export default EveryCardsBoxSkeleton