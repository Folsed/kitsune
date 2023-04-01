import styles from './header.module.css'

import { Link } from 'react-router-dom';
import { Logo } from '../../assets/logo/Logo';
import search from './../../assets/icons/search.svg'
import { useEffect, useState } from 'react';
import BrowseModal from '../modals/BrowseModal';
import AuthModal from '../modals/auth/AuthModal';
import { userAuthContext } from '../../providers/AuthProvider';
import { useLogout } from '../../hooks/useLogout';

const Header = () => {
    const [active, setActive] = useState(false)
    const [toggleClass, setToggleClass] = useState('')
    const [activeItem, setActiveItem] = useState({
        anime: false,
        auth: false,
    });
    const { currentUser, userToken } = userAuthContext()
    const { logout } = useLogout()


    const handleClick = (state) => {
        setActive(true);
        setToggleClass(state)
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

    const onLogout = (ev) => {
        ev.preventDefault()

        logout.mutateAsync()

    }

    return (
        <header className={styles.header}>
            <div className={styles.headerSection}>
                <div className={styles.headerContent}>
                    <div className={styles.leftMenu}>
                        <Link className={styles.logo} to={'/'}><Logo /></Link>

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
                        <div className={styles.searchContainer}>
                            <div className={styles.searchIcon}>
                                <img src={search} alt="" />
                            </div>
                            <label className={styles.search}>
                                <input type="text" placeholder="Пошук аніме" />
                            </label>
                        </div>

                    </div>
                    <div className={styles.rightMenu}>

                        {userToken ?
                            <div className={styles.dropdownMenuBox}>
                                <div
                                    className={`${styles.menuItem} ${toggleClass === 'anime' ? styles.activeTab : ''}`}
                                    onClick={() => handleClick('anime')}
                                >
                                    <span>{currentUser.name}</span>
                                    <div className="header-svg menu-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="account"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z">
                                        </path>
                                        </svg>
                                    </div>
                                </div>
                                <BrowseModal toggleClass={toggleClass} setToggleClass={setToggleClass} />
                                <div className={styles.menuItem} onClick={(ev) => onLogout(ev)}><h4>Logout</h4></div>
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
                                <AuthModal toggleClass={toggleClass} setToggleClass={setToggleClass} setActive={setActive}/>
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