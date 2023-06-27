import styles from './carousel.module.css'
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/routes";


const CarouselSlide = ({ children, animeId, alias }) => {
    return (
        <div className={`${styles.carouselContentContainer}`}>
            <div className={styles.carouselContentWrapper}>
                <NavLink to={ROUTES.animePage(animeId, alias)}>
                    <div className={styles.carouselContentBox}>{children}</div>
                </NavLink>
            </div>
        </div>
    );
};

export default CarouselSlide