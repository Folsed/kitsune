import styles from './modal.module.css'
import { useGenres } from '../../hooks/useGenres'
import { Link, NavLink } from 'react-router-dom'
import avatar from './../../img/avatar.jpg'
import { userAuthContext } from '../../providers/AuthProvider'
import { ROUTES } from './../../router/routes'
import { useLogout } from '../../hooks/useLogout'
import admin from './../../assets/icons/icon-admin.svg'



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
                        <div className={styles.userInfoWrap}>
                            <div className={styles.avatar}>
                                <div className={styles.avatarWrapper}>
                                    <img src={avatar} alt="" />
                                </div>
                            </div>
                            <span>{currentUser.name}</span>
                        </div>
                        {currentUser.roles[0].name === 'Administrator' ? <span className={styles.isAdmin}>A</span> : ''}
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
                        {currentUser.roles[0].name === 'Administrator' ?
                            <li className={`${styles.actionBox} ${styles.adminNav}`}>
                                <NavLink to={ROUTES.adminPanel} onClick={() => setActive(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" fill='white'><path d="M14.6362 23.5699c-3.8016-1.9008-6.3677-5.7024-6.3677-10.2643 0-6.2726 5.1322-11.4048 11.4048-11.4048s11.4048 5.1322 11.4048 11.4048c0 6.1776-4.847 11.2147-11.0246 11.4048h-.095c-9.409 0-17.1072 7.6982-17.1072 17.1072 0 .5702-.3802.9504-.9504.9504s-.9504-.3802-.9504-.9504c0-8.6486 5.7974-15.9667 13.6858-18.2477zm5.0371-.7603c5.2272 0 9.504-4.2768 9.504-9.504s-4.2768-9.504-9.504-9.504-9.504 4.2768-9.504 9.504 4.2768 9.504 9.504 9.504zm26.041 6.2726.1901.4752-2.281 2.7562c-.3802.4752-.3802 1.2355 0 1.7107l2.281 2.6611-.1901.4752c-.4752 1.3306-1.1405 2.6611-2.0909 3.7066l-.3802.3802-3.5165-.5702c-.5702-.095-1.2355.2851-1.4256.8554l-1.2355 3.4214-.4752.095c-1.8058.3802-3.6115.3802-5.4173 0l-.5702-.095-1.1405-3.3264c-.1901-.5702-.8554-.9504-1.4256-.8554l-3.6115.5702-.3802-.3802c-.4752-.4752-.8554-1.0454-1.1405-1.6157-.3802-.6653-.7603-1.4256-.9504-2.1859l-.1901-.4752 2.376-2.6611c.3802-.4752.3802-1.2355 0-1.6157l-2.281-2.7562.1901-.4752c.4752-1.4256 1.2355-2.6611 2.1859-3.8016l.3802-.3802 3.4214.5702c.5702.095 1.2355-.2851 1.5206-.8554l1.2355-3.3264.4752-.095c1.7107-.3802 3.5165-.3802 5.3222 0l.5702.095 1.1405 3.2314c.1901.5702.8554 1.0454 1.5206.9504l3.5165-.4752.3802.3802c.4752.5702.8554 1.0454 1.1405 1.7107.2851.4752.5702 1.2355.8554 1.9008zm-2.6611-1.1405c-.1901-.3802-.3802-.6653-.6653-1.0454l-2.471.2851c-1.5206.1901-3.0413-.7603-3.5165-2.1859L35.64 22.8096c-1.1405-.1901-2.281-.1901-3.4214 0l-.8554 2.281c-.4752 1.4256-2.0909 2.376-3.6115 2.0909l-2.376-.3802c-.5702.6653-.9504 1.5206-1.3306 2.281l1.6157 1.9008c.9504 1.1405.9504 2.9462 0 4.0867l-1.6157 1.9008c.1901.4752.3802.8554.6653 1.3306.1901.3802.3802.6653.6653.9504l2.5661-.3802c1.5206-.1901 3.0413.7603 3.5165 2.1859l.7603 2.281c1.1405.1901 2.376.1901 3.5165 0l.8554-2.376c.4752-1.4256 2.0909-2.376 3.5165-2.0909l2.376.3802c.4752-.6653.9504-1.4256 1.2355-2.281l-1.5206-1.8058c-.9504-1.1405-1.0454-2.9462-.095-4.0867l1.6157-1.9008c-.1901-.3802-.3802-.7603-.6653-1.2355zm-9.1238 9.504c-2.376 0-4.2768-1.9008-4.2768-4.2768s1.9008-4.2768 4.2768-4.2768 4.2768 1.9008 4.2768 4.2768-1.9958 4.2768-4.2768 4.2768zm0-1.9008c1.3306 0 2.376-1.0454 2.376-2.376s-1.0454-2.376-2.376-2.376-2.376 1.0454-2.376 2.376 1.0454 2.376 2.376 2.376z" /></svg>
                                    <span>Адмін Панель</span>
                                </NavLink>
                            </li>
                            :
                            ''
                        }
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