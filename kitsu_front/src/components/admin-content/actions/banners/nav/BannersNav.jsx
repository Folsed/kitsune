import { useContext } from 'react'
import styles from './../../nav.module.css'
import AdminContext from '../../../../../providers/AdminProvider'

const BannersNav = () => {
    const {action, setAction} = useContext(AdminContext)

    return (
        <div className={styles.navWrapper}>
            <div className={styles.nav}>
                <button
                    onClick={() => { setAction('banners-tables') }}
                    className={`${styles.navBtn} ${action === 'banners-tables' ? styles.active : ''}`}
                >
                    Таблиці
                </button>
                <button
                    onClick={() => { setAction('banners-forms') }}
                    className={`${styles.navBtn} ${action === 'banners-forms' ? styles.active : ''}`}
                >
                    Форми
                </button>
            </div>
        </div>
    )
}

export default BannersNav