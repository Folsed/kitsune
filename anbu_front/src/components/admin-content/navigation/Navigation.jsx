import { useContext, useState } from 'react'
import styles from './navigation.module.css'
import AnimeContext from '../../../providers/AnimeProvider'
import Dropdown from './Dropdown'

const Navigation = () => {
    const { active, setActive, setSubAction, setAction } = useContext(AnimeContext)

    return (
        <div className={styles.navWrapper}>
            <div className={styles.nav}>
                <div className={styles.navPoint}>
                    <button
                        onClick={() => { setActive('anime'); setSubAction(''); setAction('anime-tables') }}
                        className={`${styles.navBtn} ${active === 'anime' ? styles.active : ''}`}
                    >
                        Аніме
                    </button>
                    {/* {active === 'anime' ?
                        <Dropdown
                            items={[
                                { name: 'Жанри', label: 'genres' },
                                { name: 'Коментарі', label: 'comments' },
                            ]}
                        />
                        : ''} */}
                </div>
                <div className={styles.navPoint}>
                    <button
                        onClick={() => { setActive('carousel'); setSubAction(''); setAction('carousel-tables') }}
                        className={`${styles.navBtn} ${active === 'carousel' ? styles.active : ''}`}
                    >
                        Карусель
                    </button>
                </div>
                <div className={styles.navPoint}>
                    <button
                        onClick={() => { setActive('banners'); setSubAction(''); setAction('banners-tables') }}
                        className={`${styles.navBtn} ${active === 'banners' ? styles.active : ''}`}
                    >
                        Банери
                    </button>
                </div>
                <div className={styles.navPoint}>
                    <button
                        onClick={() => { setActive('users'); setSubAction('') }}
                        className={`${styles.navBtn} ${active === 'users' ? styles.active : ''}`}
                    >
                        Користувачі
                    </button>
                </div>
                <div className={styles.navPoint}>
                    <button
                        onClick={() => { setActive('roles'); setSubAction('') }}
                        className={`${styles.navBtn} ${active === 'roles' ? styles.active : ''}`}
                    >
                        Ролі
                    </button>
                </div>
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