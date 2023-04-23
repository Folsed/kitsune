import styles from './table-skeleton.module.css'
import skeleton from '../skeleton-animation.module.css'

const TablesSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            {Array(15).fill(null).map((_, index) => (
                <div className={`${styles.skeletonField} ${skeleton.loading}`}></div>
            ))}
        </div>
    )
}

export default TablesSkeleton