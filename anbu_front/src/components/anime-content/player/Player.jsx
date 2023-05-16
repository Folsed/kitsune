import styles from './player.module.css'

import React from 'react'

import video from 'C:/Study/IT/storage/videos/video2.mp4'
import ReactPlayer from 'react-player/file'
import { PlayerBackground } from './PlayerBackground'
import { OrangeBackground } from './../../home-content/banners/banner-bgs/OrangeBackground'

const Player = () => {
    // Future addon
    // const componentsArray = [PlayerBackground, OrangeBackground]
    // const randomIndex = Math.floor(Math.random() * componentsArray.length)
    // {React.createElement(componentsArray[randomIndex])}


    return (
        <div>
            <div className={styles.playerWrapper}>
                <div className={styles.background}>
                    <PlayerBackground/>
                </div>
                <div className={styles.playerContainer}>
                    <ReactPlayer
                        url={video}
                        controls
                        width={`100%`}
                        height={`400px`}
                        style={{ backgroundColor: 'black' }}
                    />
                    <div className={styles.seriesWrapper}>
                        <ul className={styles.seriesTabs}>
                            <li className={`${styles.tabItem} ${styles.active}`}>Серія 1</li>
                            <li className={styles.tabItem}>Серія 2</li>
                            <li className={styles.tabItem}>Серія 3</li>
                            <li className={styles.tabItem}>Серія 4</li>
                            <li className={styles.tabItem}>Серія 5</li>
                            <li className={styles.tabItem}>Серія 6</li>
                            <li className={styles.tabItem}>Серія 7</li>
                            <li className={styles.tabItem}>Серія 8</li>
                            <li className={styles.tabItem}>Серія 2</li>
                            <li className={styles.tabItem}>Серія 3</li>
                            <li className={styles.tabItem}>Серія 4</li>
                            <li className={styles.tabItem}>Серія 5</li>
                            <li className={styles.tabItem}>Серія 6</li>
                            <li className={styles.tabItem}>Серія 7</li>
                            <li className={styles.tabItem}>Серія 8</li>
                            <li className={styles.tabItem}>Серія 2</li>
                            <li className={styles.tabItem}>Серія 3</li>
                            <li className={styles.tabItem}>Серія 4</li>
                            <li className={styles.tabItem}>Серія 5</li>
                            <li className={styles.tabItem}>Серія 6</li>
                            <li className={styles.tabItem}>Серія 7</li>
                            <li className={styles.tabItem}>Серія 8</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Player
