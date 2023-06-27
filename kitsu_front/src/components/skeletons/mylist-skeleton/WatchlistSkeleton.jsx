import styles from './mylist.module.css'
import skeleton from './../skeleton-animation.module.css'

const WatchlistSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            {Array(4).fill(null).map((_, index) => (
                <div className={styles.innerWrapper} key={index}>
                    <div className={`${styles.preview} ${skeleton.loading}`}></div>
                    <div className={styles.info}>
                        <div className={styles.upper}>
                            <div className={`${styles.title} ${skeleton.loading}`}></div>
                            <div className={`${styles.rating} ${skeleton.loading}`}></div>
                        </div>
                        <div className={`${styles.synopsis} ${skeleton.loading}`}></div>
                        <div className={`${styles.added} ${skeleton.loading}`}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WatchlistSkeleton