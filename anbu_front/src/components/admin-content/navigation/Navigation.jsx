import { useContext, useState } from 'react'
import styles from './navigation.module.css'
import AnimeContext from '../../../providers/AnimeProvider'

const Navigation = () => {
    const {active, setActive} = useContext(AnimeContext)
    return (
        <div className={styles.navWrapper}>
            <div className={styles.nav}>
                <button
                    onClick={() => { setActive('anime') }}
                    className={`${styles.navBtn} ${active === 'anime' ? styles.active : ''}`}
                >
                    Аніме
                </button>
                <button
                    onClick={() => { setActive('news') }}
                    className={`${styles.navBtn} ${active === 'news' ? styles.active : ''}`}
                >
                    Новини
                </button>
                <button
                    onClick={() => { setActive('users') }}
                    className={`${styles.navBtn} ${active === 'users' ? styles.active : ''}`}
                >
                    Користувачі
                </button>
                <button
                    onClick={() => { setActive('roles') }}
                    className={`${styles.navBtn} ${active === 'roles' ? styles.active : ''}`}
                >
                    Ролі
                </button>
                <button
                    onClick={() => { setActive('system') }}
                    className={`${styles.navBtn} ${active === 'system' ? styles.active : ''}`}
                >
                    Система
                </button>
            </div>
        </div>
    )
}

export default Navigation