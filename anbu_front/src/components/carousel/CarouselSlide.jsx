import { useEffect, useState } from "react";

import styles from './carousel.module.css'


export const CarouselSlide = ({ children, width, currentIndex, index }) => {
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        if (currentIndex !== index) {
            const timeoutId = setTimeout(() => {
                setIsHidden(true)
            }, 1000)
            return () => clearTimeout(timeoutId);
        } else {
            setIsHidden(false)
        }
    }, [currentIndex, index])

    return (
        <div className={`${styles.carouselContentContainer} ${isHidden ? styles.hiddenCarouselSlide : ''}`}>
            <div className={styles.carouselContentWrapper}>
                <div className={styles.carouselContentBox}>{children}</div>
            </div>
        </div>
    );
};