import styles from './header.module.css'

import React, { useContext } from 'react'
import AnimeContext from '../../../providers/AnimeProvider'

import HeaderSkeleton from '../../skeletons/anime-page-skeleton/HeaderSkeleton'

const Header = () => {
    const animeData = useContext(AnimeContext)
    const ROOT_URL = import.meta.env.VITE_ROOT_URL

    const data = animeData.data

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                {animeData.isLoading ? <HeaderSkeleton /> :
                    <div className={styles.subWrapper}>
                        <div className={styles.subPreviewBackgroundWrapper}>
                            <div className={styles.subPreviewBackground}>
                                <picture>
                                    <img
                                        key=""
                                        src={`${ROOT_URL}${data.preview[0].sub_preview_path}`}
                                        alt=""
                                        title=""
                                    // loading="lazy"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className={styles.showDescription}>
                            <div className={styles.descWrapper}>
                                <div className={styles.desc}>
                                    <div className={styles.aniLogo}>
                                        <picture>
                                            <img
                                                className={styles.logo}
                                                src={`${ROOT_URL}${data.preview[0].logo_path}`}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </header>
    )
}

export default Header