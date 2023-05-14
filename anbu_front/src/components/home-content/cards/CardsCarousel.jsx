import styles from './cards-carousel.module.css'
import './cards-carousel.css'

import Slider from 'react-slick';
import { PrevArrow } from './UI/PrevArrow';
import { NextArrow } from './UI/NextArrow';
import { useState } from 'react';

const slidesToShow = 6

const CardsCarousel = ({ children }) => {
    const [isHovering, setIsHovering] = useState(false);

    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: slidesToShow,
        slidesToScroll: 6,
        nextArrow: <NextArrow slidesToShow={slidesToShow} />,
        prevArrow: <PrevArrow slidesToShow={slidesToShow} />,
        dotsClass: 'dots',
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        draggable: false,
    }

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Slider {...settings} className={styles.cardsSlider} >
                {children}
            </Slider>
        </div>
    )
}

export default CardsCarousel
