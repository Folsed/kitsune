import styles from './modal.module.css'
import { NavLink } from 'react-router-dom'
import { userAuthContext } from '../../providers/AuthProvider'
import { ROUTES } from './../../router/routes'
import { useLogout } from '../../hooks/user/useLogout'
import { useContext } from 'react'
import AuthModalContext from '../../providers/AuthModalProvider'
import AccountContext from '../../providers/AccountProvider'
import { AiOutlineUser } from 'react-icons/ai'
import { TbBook } from 'react-icons/tb'
import { RiBookmarkLine } from 'react-icons/ri'
import { ReactComponent as AdminIcon } from '../../assets/icons/admin.svg'
import { ImExit } from 'react-icons/im'


const UserActionsModal = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { currentUser, userToken, watchlist } = userAuthContext()
    const { setActive, toggleClass } = useContext(AuthModalContext)
    const { setActiveTab } = useContext(AccountContext)
    const { logout } = useLogout(setActive)
    

    const onLogout = (ev) => {
        ev.preventDefault()
        logout.mutateAsync()
        setActive(false)
    }

    const handleClick = (index) => {
        setActive(false)
        setActiveTab(index)
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
                                    {currentUser.avatar_softsize ?
                                        <img
                                            src={`${ROOT_URL}${currentUser.avatar_softsize}`}
                                            alt=""
                                        />
                                        : ''
                                    }
                                </div>
                            </div>
                            <span>{currentUser.name}</span>
                        </div>
                        {currentUser.roles[0].name === 'Administrator' ? <span className={styles.isAdmin}>A</span> : ''}
                    </div>
                    <ul className={styles.actions}>

                        <li className={styles.actionBox}>
                            <NavLink to={ROUTES.account} onClick={() => handleClick(0)}>
                                <AiOutlineUser size={22} />
                                <span>Профіль</span>
                            </NavLink>
                        </li>
                        <li className={styles.actionBox}>
                            <NavLink to={ROUTES.account} onClick={() => handleClick(1)}>
                                <TbBook size={22} />
                                <span>Переглядаю (5)</span>
                            </NavLink>
                        </li>
                        <li className={styles.actionBox}>
                            <NavLink to={ROUTES.account} onClick={() => handleClick(2)}>
                                <RiBookmarkLine size={22} />
                                <span>Заплановано ({watchlist?.length || 0})</span>
                            </NavLink>
                        </li>
                        {currentUser.roles[0].name === 'Administrator' ?
                            <li className={`${styles.actionBox} ${styles.adminNav}`}>
                                <NavLink to={ROUTES.adminPanel} onClick={() => setActive(false)}>
                                    <AdminIcon />
                                    <span>Адмін Панель</span>
                                </NavLink>
                            </li>
                            :
                            ''
                        }
                        <li className={styles.actionBox}>
                            <div className={styles.action} onClick={(ev) => onLogout(ev)}>
                                <ImExit size={18} />
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