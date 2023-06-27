import styles from './not-found.module.css'
import { BlackButton } from '../../UI/buttons/BlackButton'
import NotFoundPng from '../../img/errors/not-found.png'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../router/routes'

export const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.notFound}>
                <img src={NotFoundPng} alt="" />
            </div>
            <NavLink to={ROUTES.home} className={styles.errorButton}>
                <BlackButton title={'На головну'} />
            </NavLink>
        </div>
    )
}
