import styles from './header.module.css'

import avatar from './../../img/avatar.jpg'

import { Link } from 'react-router-dom';
import { Logo } from '../../assets/logo/Logo';
import { useEffect, useState } from 'react';
import BrowseModal from '../modals/BrowseModal';
import AuthModal from '../modals/auth/AuthModal';
import { userAuthContext } from '../../providers/AuthProvider';
import UserActionsModal from '../modals/UserActionsModal';
import LiveSearch from '../live-serach/LiveSearch';

const Header = () => {
    const [active, setActive] = useState(false)
    const [toggleClass, setToggleClass] = useState('')
    const [activeItem, setActiveItem] = useState({
        anime: false,
        auth: false,
    });
    const { currentUser, userToken } = userAuthContext()

    const handleClick = (state) => {
        if (state === toggleClass) {
            setActive(false)
        } else {
            setActive(true)
        }
        setToggleClass(state)
    }

    const destroyStates = () => {
        setToggleClass('')
        setActive(false)
    }

    useEffect(() => {
        if (!active) {
            setToggleClass('')
        }
    }, [active]);

    if (active) {
        document.body.classList.add('scroll-blocked')
    } else {
        document.body.classList.remove('scroll-blocked')
    }


    return (
        <header className={styles.header}>
            <div className={styles.headerSection}>
                <div className={styles.headerContent}>
                    <div className={styles.leftMenu}>
                        <Link className={styles.logo} to={'/'} onClick={() => destroyStates()}><Logo /></Link>

                        <div
                            className={styles.dropdownMenuBox}
                        >
                            <div
                                className={`${styles.menuItem} ${toggleClass === 'anime' ? styles.activeTab : ''}`}
                                onClick={() => handleClick('anime')}
                            >
                                <span>Аніме</span>
                                <div className="header-svg menu-icon">
                                    <svg className="header-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="4 4 14 14" data-t="dropdown-svg" aria-labelledby="dropdown-svg" aria-hidden="true" role="img">
                                        <path d="M7 10h10l-5 5z"></path>
                                    </svg>
                                </div>
                            </div>
                            <BrowseModal active={active} setActive={setActive} toggleClass={toggleClass} setToggleClass={setToggleClass} />
                        </div>

                        <Link className={styles.menuItem}><span>Новини</span></Link>
                    </div>
                    <div className={styles.centerMenu}>
                        <LiveSearch/>
                    </div>
                    <div className={styles.rightMenu}>

                        {userToken ?
                            <div className={styles.dropdownMenuBox}>
                                <div
                                    className={`${styles.menuItem} ${toggleClass === 'user' ? styles.activeTab : ''}`}
                                    onClick={() => handleClick('user')}
                                >
                                    <span>{currentUser.name}</span>
                                    <div className={styles.avatar}>
                                        <div className={styles.avatarWrapper}>
                                            <img src={avatar} alt="" />
                                        </div>
                                    </div>
                                    <div className="header-svg menu-icon">
                                        <svg className="header-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="4 4 14 14" data-t="dropdown-svg" aria-labelledby="dropdown-svg" aria-hidden="true" role="img">
                                            <path d="M7 10h10l-5 5z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <UserActionsModal toggleClass={toggleClass} setToggleClass={setToggleClass} setActive={setActive} />
                            </div>

                            :

                            <div className={styles.dropdownMenuBox}>
                                <div
                                    className={`${styles.menuItem} ${toggleClass === 'auth' ? styles.activeTab : ''}`}
                                    onClick={() => handleClick('auth')}
                                >
                                    <span>Авторизація</span>
                                    <div className="header-svg menu-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="account"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z">
                                        </path>
                                        </svg>
                                    </div>
                                </div>
                                <AuthModal toggleClass={toggleClass} setToggleClass={setToggleClass} setActive={setActive} />
                            </div>
                        }

                    </div>
                </div>
                <div
                    className={`${styles.blackout} ${active ? styles.blackoutActive : ''}`}
                    onClick={() => setActive(false)}
                >
                </div>
            </div>

        </header>
    );
}

export default Header;