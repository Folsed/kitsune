import skeleton from './../skeleton-animation.module.css'
import styles from './search-skeleton.module.css'

const LiveSearchSkeleton = () => {
  return (
    <div className={styles.searchLoading}>
        <div className={`${styles.contentLoading} ${skeleton.loading}`}></div>
    </div>
  )
}

export default LiveSearchSkeleton