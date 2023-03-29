import { Arrow } from '../../../../utils/helpers/Arrow'
import styles from './../cards-carousel.module.css'

export const NextArrow = (props) => {
    const { onClick, slideCount, currentSlide, slidesToShow } = props;
    return (
        <div className={styles.arrowWrapper}>
            <Arrow
                className={`${styles.arrow} ${styles.arrowRight} ${currentSlide === slideCount - slidesToShow ? styles.hidden : ''}`}
                onClick={onClick}
            />
        </div>
    )
}