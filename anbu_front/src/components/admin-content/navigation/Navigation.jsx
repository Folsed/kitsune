import { useContext, useState } from 'react'
import styles from './navigation.module.css'
import AnimeContext from '../../../providers/AnimeProvider'
import Dropdown from './Dropdown'

const Navigation = () => {
    const { active, setActive, setSubAction } = useContext(AnimeContext)

    return (
        <div className={styles.navWrapper}>
            <div className={styles.nav}>
                <div className={styles.navPoint}>
                    <button
                        onClick={() => { setActive('anime'); setSubAction('') }}
                        className={`${styles.navBtn} ${active === 'anime' ? styles.active : ''}`}
                    >
                        Аніме
                    </button>
                    {active === 'anime' ?
                        <Dropdown
                            items={[
                                { name: 'Жанри', label: 'genres' },
                                { name: 'Коментарі', label: 'comments' },
                            ]}
                        />
                        : ''}
                </div>
                <div className={styles.navPoint}>
                    <button
                        onClick={() => { setActive('news'); setSubAction('') }}
                        className={`${styles.navBtn} ${active === 'news' ? styles.active : ''}`}
                    >
                        Новини
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