import { Arrow } from '../../../../utils/helpers/Arrow'
import styles from './../cards-carousel.module.css'

export const PrevArrow = (props) => {
    const { onClick, slideCount, currentSlide, slidesToShow } = props;
    return (
        <div className={styles.arrowWrapper}>
            <Arrow
                className={`${styles.arrow} ${styles.arrowLeft} ${currentSlide === 0 ? styles.hidden : ''}`}
                onClick={onClick}
            />
        </div>
    )
}
