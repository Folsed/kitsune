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