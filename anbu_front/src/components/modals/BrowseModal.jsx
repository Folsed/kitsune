import styles from './modal.module.css'
import { useGenres } from '../../hooks/useGenres'
import { Link } from 'react-router-dom'


const BrowseModal = ({ toggleClass }) => {
    const { isLoading, isError, data } = useGenres()

    if (isLoading) {
        return null
    }


    return (
        <div
            className={`${styles.menuDropdown} ${toggleClass === 'anime' ? styles.activeTabContent : ''}`}
        >
            <div className={styles.dropdownContent}>
                <div className={styles.genresWrapper}>
                    <div className={styles.text}>
                        <h4>Аніме за жанром</h4>
                    </div>
                    <ul className={styles.genres}>
                        {data.map((item, i) => (
                            <li className={styles.genreBox} key={i}>
                                <Link className={styles.genre}>
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