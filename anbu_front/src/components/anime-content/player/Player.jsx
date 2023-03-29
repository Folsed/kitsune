import styles from './player.module.css'

import React from 'react'

import video from './../../../assets/videos/video1.mp4'
import ReactPlayer from 'react-player/file'

const Player = () => {

    return (
        <div>
            <div className={styles.playerWrapper}>
                <div className={styles.seasonsTabsWrapper}>
                    <ul className={styles.seasonsTabs}>
                        <li className={`${styles.tabItem} ${styles.active}`}>Сезон 1</li>
                        <li className={styles.tabItem}>Сезон 2</li>
                        <li className={styles.tabItem}>Сезон 3</li>
                    </ul>
                </div>
                <div className={styles.playerContainer}>
                    <ReactPlayer
                        url={video}
                        controls
                        width={`100%`}
                        height={`600px`}
                        style={{ backgroundColor: 'black' }}
                    />
                </div>
                <div className={styles.seriesTabsWrapper}>
                    <ul className={styles.seriesTabs}>
                        <li className={`${styles.tabItem} ${styles.active}`}>Серія 1</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>

                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>

                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        <li className={styles.tabItem}>Серія 2</li>
                        <li className={styles.tabItem}>Серія 3</li>
                        <li className={styles.tabItem}>Серія 4</li>
                        <li className={styles.tabItem}>Серія 5</li>
                        <li className={styles.tabItem}>Серія 6</li>
                        

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Player