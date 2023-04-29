import { useQuery } from 'react-query';
import { useAnime } from '../../../hooks/admin/useAnime';
import styles from './modal.module.css'

const DetailsModal = ({ setActive, active, setToggleClass, toggleClass, animeId, setAnimeId }) => {
    const { isLoading, isError, data: anime, remove } = useAnime(animeId)



    return (
        <div className={styles.modalDisplay}>
            {toggleClass === 'details' ?
                <div className={styles.detailsWrapper}>
                    {isLoading ? 'Loading' :
                        <>
                            <div className={styles.header}>
                                <div className={styles.subPreview}>
                                    <img src="" alt="" />
                                </div>
                                <div className={styles.logo}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.description}>
                                    <h1>{anime.ua_title}</h1>
                                    <span>{anime.en_title}</span>
                                </div>
                                <div className={styles.preview}>

                                </div>
                            </div>
                        </>
                    }
                </div>
                : ''
            }
            <div
                className={`${styles.blackout} ${active ? styles.activeBlackout : ''}`}
                onClick={() => { setActive(false); setToggleClass(''); setAnimeId(null) }}
            ></div>
        </div>
    )
}

export default DetailsModal