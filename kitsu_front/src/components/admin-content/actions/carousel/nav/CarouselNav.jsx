import { useContext } from 'react'
import styles from './../../nav.module.css'
import AdminContext from '../../../../../providers/AdminProvider'

const CarouselNav = () => {
    const {action, setAction} = useContext(AdminContext)

    return (
        <div className={styles.navWrapper}>
            <div className={styles.nav}>
                <button
                    onClick={() => { setAction('carousel-tables') }}
                    className={`${styles.navBtn} ${action === 'carousel-tables' ? styles.active : ''}`}
                >
                    Таблиці
                </button>
                <button
                    onClick={() => { setAction('carousel-forms') }}
                    className={`${styles.navBtn} ${action === 'carousel-forms' ? styles.active : ''}`}
                >
                    Форми
                </button>
            </div>
        </div>
    )
}

export default CarouselNav