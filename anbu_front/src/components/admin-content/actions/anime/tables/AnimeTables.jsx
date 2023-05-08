import { useContext } from 'react'
import AllAnimes from './all/AllAnimes'
import styles from '../../table.module.css'
import AnimeContext from '../../../../../providers/AnimeProvider'
import AnimeGenres from './genres/AnimeGenres'

const AnimeTables = () => {
    const { active, subAction } = useContext(AnimeContext)

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