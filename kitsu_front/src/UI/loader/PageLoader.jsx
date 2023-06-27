import Spinner from './Spinner'
import styles from './spinner.module.css'

const PageLoader = () => {
    return (
        <div className={styles.pageLoadingWrapper}>
            <div className={styles.spinnerWrapper}>
                <Spinner size={50} />
            </div>
        </div>
    )
}

export default PageLoader