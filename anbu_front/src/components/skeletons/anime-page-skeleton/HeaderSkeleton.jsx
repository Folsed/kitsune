import styles from './header-skeleton.module.css'
import skeleton from './../skeleton-animation.module.css'

const HeaderSkeleton = () => {
  return (
    <div className={`${styles.headerSkeleton} ${skeleton.loading}`}></div>
  )
}

export default HeaderSkeleton