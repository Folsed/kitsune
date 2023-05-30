import styles from "./carousel.module.css"
import React, { Children, useEffect, useRef, useState } from 'react'
import Background from './backgrounds/Background'
import { Background1 } from './backgrounds/Background1'
import { Background2 } from './backgrounds/Background2'
import { Background3 } from './backgrounds/Background3'
import { Arrow } from '../../utils/helpers/Arrow'


const CarouselLogic = ({ children, slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const innerCarouselTrackRef = useRef(null)
    const [count, setCount] = useState(0)
    const currentIndexRef = useRef(currentIndex)

    const animationPaused = isPaused ? 'paused' : 'running'

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(children) - 1
        } else if (newIndex >= Children.count(children)) {
            newIndex = 0
        }

        const direction = newIndex > currentIndex ? 1 : -1
        const tabIndices = []

        for (let i = currentIndex; i !== newIndex; i += direction) {
            tabIndices.push(i)
        }

        tabIndices.push(newIndex)

        tabIndices.forEach((index, i) => {
            setTimeout(() => {
                const tab = document.getElementById(`.carousel_tab:nth-child(${index + 1})`)
                if (tab) {
                    tab.classList.add(styles.activeTab)
                }
                setCurrentIndex(index)
            }, (i - 1) * 100)
        })

        if (innerCarouselTrackRef.current) {
            const newScrollLeft = innerCarouselTrackRef.current.clientWidth * newIndex
            innerCarouselTrackRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            })
        }
    }

    const handleVisibilityChange = () => {
        setIsPaused(document.hidden)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCount((prevCount) => prevCount + 1 / 100)
            }
        }, 10)

        document.addEventListener('visibilitychange', handleVisibilityChange)

        return () => {
            clearInterval(interval)
            document.removeEventListener('visibilitychange', handleVisibilityChange)

        }
    }, [currentIndex, isPaused])

    useEffect(() => {
        if (count >= 7.9) {
            updateIndex(currentIndex + 1)
            setCount(0)
        }
    }, [count, currentIndex])

    console.log(count)


    return (
        <div className={styles.welcomeCarousel} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className={styles.carouselBackgroundContainer}>
                <div className={styles.backgroundWrapper}>
                    <Background >
                        <Background1 currentIndex={currentIndex} />
                        <Background2 currentIndex={currentIndex} />
                        <Background3 currentIndex={currentIndex} />
                    </Background>
                </div>
            </div>
            <div className={styles.carouselWrapper}>
                <div className={styles.arrowWrapper}>
                    <Arrow
                        className={`${styles.arrow} ${styles.arrowLeft} ${currentIndex === 0 ? styles.hidden : ''}`}
                        onClick={() => {
                            updateIndex(currentIndex - 1)
                        }}
                    />
                </div>
                <div className={styles.carouselMainContainer}>
                    <div
                        className={styles.innerCarouselTrack}
                        ref={innerCarouselTrackRef}
                    >
                        {Children.map(children, (child, index) => {
                            return React.cloneElement(child, { currentIndex: currentIndex, index: index })
                        })}
                    </div>
                </div>
                <div className={styles.arrowWrapper}>
                    <Arrow
                        className={`${styles.arrow} ${styles.arrowRight} ${currentIndex === Children.count(children) - 1 ? styles.hidden : ''}`}
                        onClick={() => {
                            updateIndex(currentIndex + 1)
                        }}
                    />
                </div>

            </div>
            <div className={styles.carouselNavigation}>
                <div className={styles.carouselTabs}>
                    {slides.map((item, index) => {
                        return (
                            <button
                                id='carousel_tab'
                                className={`${styles.carouselTab} ${index === currentIndex ? styles.activeTab : ''}`}
                                onClick={() => {
                                    updateIndex(index)
                                }}
                                key={item.id}
                            >
                                <div
                                    className={styles.carouselTabIndicator}
                                    style={{ '--animation-paused': animationPaused }}
                                />
                                <span className={styles.carouselTabText}>{item.title}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CarouselLogic

