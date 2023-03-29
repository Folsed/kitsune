import styles from './cards-carousel.module.css'

import Slider from 'react-slick';
import { PrevArrow } from './UI/PrevArrow';
import { NextArrow } from './UI/NextArrow';

const slidesToShow = 6

const CardsCarousel = ({ children }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: slidesToShow,
        slidesToScroll: 6,
        nextArrow: <NextArrow slidesToShow={slidesToShow}/>,
        prevArrow: <PrevArrow slidesToShow={slidesToShow}/>,

    };

    return (
        <div className={styles.wrapper}>
            <Slider {...settings} className={styles.cardsSlider}>
                {children}
            </Slider>
        </div>
    )
}

export default CardsCarousel
