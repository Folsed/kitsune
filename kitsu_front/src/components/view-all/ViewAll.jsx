import styles from './view-all.module.css'

import { BlackButton } from '../../UI/buttons/BlackButton'
import cat from './../../img/view-all-cat.png'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../router/routes'

export const ViewAll = () => {
    return (
        <div className={styles.content}>
            <img src={cat} alt="" />
            <h3>
                Все ще шукаєте, що подивитися?
                <br />
                Перегляньте нашу повну бібліотеку
            </h3>
            <NavLink to={ROUTES.anime}>
                <BlackButton title="Дивитись все" className={`view-all`} />
            </NavLink>
        </div>
    )
}
