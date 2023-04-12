import styles from './modal.module.css'
import { useGenres } from '../../hooks/useGenres'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../router/routes'
import { useState } from 'react'


const BrowseModal = ({ toggleClass, setActive }) => {
    const { isLoading, isError, data } = useGenres()
    const [ genre, setGenre ] = useState('')

    if (isLoading) {
        return null
    }

    const handleGenre = (genreName) => {
        setActive(false)
        setGenre(genreName)
    }

    return (
        <div
            className={`${styles.menuDropdown} ${toggleClass === 'anime' ? styles.activeTabContent : ''}`}
        >
            <div className={styles.dropdownContent}>
                <div className={styles.menuWrapper}>
                    <ul className={styles.menu}>
                        <li className={styles.menuItemWrapper}>
                            <Link to={ROUTES.anime} className={styles.menuItem} onClick={() => setActive(false)}>
                                <p>Всі аніме</p>
                            </Link>
                        </li>
                        <li className={styles.menuItemWrapper} onClick={() => setActive(false)}>
                            <Link className={styles.menuItem}>
                                <p>Новинки</p>
                            </Link>
                        </li>
                        <li className={styles.menuItemWrapper} onClick={() => setActive(false)}>
                            <Link className={styles.menuItem}>
                                <p>Популярні</p>
                            </Link>
                        </li>
                        <li className={styles.menuItemWrapper} onClick={() => setActive(false)}>
                            <Link className={styles.menuItem}>
                                <p>Найкращі</p>
                            </Link>
                        </li>
                        <li className={styles.menuItemWrapper} onClick={() => setActive(false)}>
                            <Link className={styles.menuItem}>
                                <p>Рандомне</p>
                            </Link>
                        </li>
                        <li className={styles.menuItemWrapper} onClick={() => setActive(false)}>
                            <Link className={styles.menuItem}>
                                <p>Календар</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.genresWrapper}>
                    <div className={styles.text}>
                        <h4>Аніме за жанром</h4>
                    </div>
                    <ul className={styles.genres}>
                        {data.map((item, i) => (
                            <li className={styles.genreBox} key={i}>
                                <Link
                                    to={ROUTES.animeByGenre(item.en_name.toLowerCase())}
                                    className={styles.genre}
                                    onClick={() => handleGenre(item.en_name)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BrowseModal