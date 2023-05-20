import styles from './player.module.css'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/file'
import { PlayerBackground } from './PlayerBackground'
import video from 'C:/Study/IT/Git/anbu/anbu_back/storage/app/videos/series/28vyq86TBWqfDRkM1OkLK5CAqMkVGYqcbuzkOtgP.mp4'
import { useAnimeSeries } from '../../../hooks/anime/useAnimeSeries'


const Player = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { data: series, isLoading } = useAnimeSeries(1083)
    const [currentVideo, setCurrentVideo] = useState(!isLoading ? series[0].video : '')
    const [currentIndex, setCurrentIndex] = useState(0)
    // Future addon
    // const componentsArray = [PlayerBackground, OrangeBackground]
    // const randomIndex = Math.floor(Math.random() * componentsArray.length)
    // {React.createElement(componentsArray[randomIndex])}

    // console.log(series[0].video)
    useEffect(() => {
      if(!isLoading) {
        setCurrentVideo(series[0].video)
      }
    }, [isLoading])

    const handleTabClick = (videoUrl, index) => {
        setCurrentVideo(videoUrl)
        setCurrentIndex(index)
    }
    if (isLoading) {
        return null
    }

    console.log()

    return (
        <div>
            <div className={styles.playerWrapper}>
                <div className={styles.background}>
                    <PlayerBackground />
                </div>
                <div className={styles.playerContainer}>
                    <ReactPlayer
                        url={`${ROOT_URL}${currentVideo}`}
                        controls
                        width={`100%`}
                        height={`400px`}
                        style={{ backgroundColor: 'black' }}
                    />
                    <div className={styles.seriesWrapper}>
                        <ul className={styles.seriesTabs}>
                            {series.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={`${styles.tabItem} ${index === currentIndex ? styles.active : ''}`}
                                    onClick={() => handleTabClick(item.video, index)}
                                >
                                    Серія {item.series_number}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Player
