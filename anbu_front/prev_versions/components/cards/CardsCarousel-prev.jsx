import './cards.style.css'
import styles from './cards-carousel.module.css'

import { Arrow } from '../../../utils/helpers/Arrow';
import React, { Children, useEffect, useRef, useState } from 'react';
const numVisibleItems = 6;

const CardsCarousel_prev = ({ children, numTotalItems }) => {



    const [currentIndex, setCurrentIndex] = useState(0)
    // const [numVisibleItems, setNumVisibleItems] = useState(0);
    // const [trackWeight, setTrackWeight] = useState(0)
    // const [cardWidth, setCardWidth] = useState(0)

    const cardRef = useRef(null)
    const trackRef = useRef()

    
    // useEffect(() => {
    //     if (cardRef.current) {
    //         const cardWidth = cardRef.current.offsetWidth;
    //         setCardWidth(cardWidth)
    //     }
    // }, []);
    
    // useEffect(() => {
    //     const newTrackWeight = trackRef.current.offsetWidth;
    //     setNumVisibleItems(Math.round(newTrackWeight / cardWidth));
    //     setTrackWeight(newTrackWeight);
    // }, [cardWidth, trackRef]);
    // console.log(numVisibleItems)
    

    const updateIndex = (newIndex) => {
        newIndex = Math.min(Math.max(newIndex, 0), numTotalItems - numVisibleItems);

        const track = trackRef.current;
        const cardWidth = (track.offsetWidth) / numVisibleItems;


        if (newIndex > currentIndex) {
            // Scroll forward
            for (let i = currentIndex + numVisibleItems; i < newIndex + numVisibleItems; i++) {
                setTimeout(() => {
                    track.children[i].classList.remove(styles.isHidden);
                }, 100 * (i - (numVisibleItems)));
            }

            for (let i = currentIndex; i < newIndex && i < numTotalItems; i++) {
                setTimeout(() => {
                    track.children[i].classList.add(styles.isHidden);
                }, 100 * (i + 2 - currentIndex));
            }
        } else if (newIndex < currentIndex) {
            // Scroll backward
            for (let i = currentIndex - 1; i >= newIndex; i--) {
                setTimeout(() => {
                    track.children[i].classList.remove(styles.isHidden);
                }, 100 * (currentIndex - (i + 1)));
            }

            for (let i = currentIndex + numVisibleItems - 1; i > newIndex + numVisibleItems - 1; i--) {
                setTimeout(() => {
                    track.children[i].classList.add(styles.isHidden);
                }, 100 * (currentIndex + numVisibleItems + 1 - i));
            }
        }

        track.scrollTo({
            left: newIndex * cardWidth,
            behavior: "smooth",
        });
        setCurrentIndex(newIndex)
    };

    const clonedChildren = React.Children.map(children, (child, index) => {
        if (index === 0) {
          return React.cloneElement(child, { ref: cardRef });
        }
        return React.cloneElement(child);
      });
    
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.arrowWrapper}>
                            <Arrow
                                onClick={() => {
                                    updateIndex(currentIndex - numVisibleItems);
                                }}
                                className={`${styles.arrow} ${styles.arrowLeft} ${currentIndex === 0 ? styles.hidden : ''}`}
                            />
                        </div>
                        <div className={styles.cardsBox}>
                            <div className={styles.carouselTrack} ref={trackRef}>
                                {/* {React.Children.map(children, (child) => {
                                    if (!child || !React.isValidElement(child)) {
                                        return null;
                                    }
                                    return React.cloneElement(child, { numVisibleItems: numVisibleItems});
                                })} */}
                                {clonedChildren}
                            </div>
                        </div>
                        <div className={styles.arrowWrapper}>
                            <Arrow
                                onClick={() => {
                                    updateIndex(currentIndex + numVisibleItems);
                                }}
                                className={`${styles.arrow} ${styles.arrowRight} ${currentIndex === numTotalItems - numVisibleItems ? styles.hidden : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsCarousel_prev