import { useContext } from 'react'
import styles from './../../nav.module.css'
import AdminContext from '../../../../../providers/AdminProvider'

const AnimeNav = () => {
    const {action, setAction} = useContext(AdminContext)

    return (
        <div className={styles.navWrapper}>
            <div className={styles.nav}>
                <button
                    onClick={() => { setAction('anime-tables') }}
                    className={`${styles.navBtn} ${action === 'anime-tables' ? styles.active : ''}`}
                >
                    Таблиці
                </button>
                <button
                    onClick={() => { setAction('anime-forms') }}
                    className={`${styles.navBtn} ${action === 'anime-forms' ? styles.active : ''}`}
                >
                    Форми
                </button>
            </div>
        </div>
    )
}

export default AnimeNav