import styles from './modal.module.css'
import { useGenres } from '../../hooks/useGenres'
import { Link, NavLink } from 'react-router-dom'
import avatar from './../../img/avatar.jpg'
import { userAuthContext } from '../../providers/AuthProvider'
import { ROUTES } from './../../router/routes'
import { useLogout } from '../../hooks/useLogout'


const UserActionsModal = ({ toggleClass, setActive }) => {
    const { currentUser, userToken } = userAuthContext()
    const { logout } = useLogout(setActive)

    const onLogout = (ev) => {
        ev.preventDefault()
        logout.mutateAsync()
        setActive(false)

    }

    return (
        <div
            className={`${styles.userDropdown} ${toggleClass === 'user' ? styles.activeTabContent : ''}`}
        >
            <div className={styles.userDropdownContent}>
                <div className={styles.contentWrapper}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}>
                            <div className={styles.avatarWrapper}>
                                <img src={avatar} alt="" />
                            </div>
                        </div>
                        <span>{currentUser.name}</span>
                    </div>
                    <ul className={styles.actions}>

                        <li className={styles.actionBox}>
                            <NavLink to={ROUTES.account} onClick={() => setActive(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='white'> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" /> </g> </svg>
                                <span>Профіль</span>
                            </NavLink>
                        </li>
                        <li className={styles.actionBox}>
                            <NavLink to={ROUTES.account} onClick={() => setActive(false)}>
                                <svg className="watchlist-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="watchlist-svg" aria-labelledby="watchlist-svg" aria-hidden="true" role="img" fill='white'>
                                    <path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path></svg>
                                <span>Заплановано (10)</span>
                            </NavLink>
                        </li>
                        <li className={styles.actionBox}>
                            <NavLink to={ROUTES.account} onClick={() => setActive(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" fill='white'><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z" /></svg>
                                <span>Переглянуто (5)</span>
                            </NavLink>
                        </li>
                        <li className={styles.actionBox}>
                            <div className={styles.action} onClick={(ev) => onLogout(ev)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='white'> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" /> </g> </svg>
                                <span>Вийти</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserActionsModal