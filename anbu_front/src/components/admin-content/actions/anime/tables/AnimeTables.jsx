import { useContext } from 'react'
import AllAnimes from './all/AllAnimes'
import styles from '../../table.module.css'
import AnimeGenres from './genres/AnimeGenres'
import AdminContext from '../../../../../providers/AdminProvider'

const AnimeTables = () => {
    const { active, subAction } = useContext(AdminContext)

    return (
        <div className={styles.actionBody}>
            {subAction === '' && active === 'anime' ?
                <AllAnimes />
                : subAction === 'anime-genres' ?
                    <AnimeGenres/>
                    : subAction === 'anime-comments' ?
                        'anime comments table'
                        : ''
            }
        </div>
    )
}

export default AnimeTables