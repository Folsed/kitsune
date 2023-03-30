import styles from './header.module.css'

import React, { useContext } from 'react'
import AnimeContext from '../../../providers/AnimeProvider'

import logo from './../../../img/nier-logo3.png'

const Header = () => {
    const animeData = useContext(AnimeContext)

    if (animeData.isLoading) {
        return <p>Loading</p>
    }

    const data = animeData.data

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.subWrapper}>
                    <div className={styles.subPreviewBackgroundWrapper}>
                        <div className={styles.subPreviewBackground}>
                            <picture>
                                <img
                                    // loading='lazy'
                                    key=""
                                    src={`http://127.0.0.1:8000/${data.preview[0].sub_preview_path}`}
                                    alt=""
                                    title=""
                                />
                            </picture>
                        </div>
                    </div>
                    <div className={styles.showDescription}>
                        <div className={styles.descWrapper}>
                            <div className={styles.desc}>
                                <div className={styles.aniLogo}>
                                    <picture>
                                        <img className={styles.logo} src={logo} alt="" />
                                    </picture>
                                </div>
                                

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header