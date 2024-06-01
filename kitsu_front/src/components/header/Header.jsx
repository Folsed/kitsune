import styles from './header.module.css'
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/logo/Logo';
import { Logo1 } from '../../assets/logo/Logo1';
import { useContext, useEffect, useState } from 'react';
import BrowseModal from '../modals/BrowseModal';
import AuthModal from '../modals/auth/AuthModal';
import { userAuthContext } from '../../providers/AuthProvider';
import UserActionsModal from '../modals/UserActionsModal';
import AuthModalContext from '../../providers/AuthModalProvider';
import { AiOutlineUser } from 'react-icons/ai';
import { RiArrowDropDownFill } from 'react-icons/ri';
import LiveSearch from '../live-serach/live_v2/LiveSearch';

const Header = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { active, setActive, toggleClass, setToggleClass } = useContext(AuthModalContext)
    const { currentUser, userToken } = userAuthContext()

    const handleClick = (state) => {
        state === toggleClass ? setActive(false) : setActive(true)
        setToggleClass(state)
    }

    const destroyStates = () => {
        setToggleClass('')
        setActive(false)
    }

    useEffect(() => {
        if (active) {
            document.body.classList.add('scroll-blocked')
        } else {
            document.body.classList.remove('scroll-blocked')
            setToggleClass('')
        }
    }, [active]);


    return (
        <header className={styles.header}>
            <div className={styles.headerSection}>
                <div className={styles.headerContent}>
                    <div className={styles.leftMenu}>
                        <Link className={styles.logoBox} to={'/'} onClick={() => destroyStates()}><Logo1 className={styles.logo} /></Link>
                        <div className={styles.dropdownMenuBox}>
                            <div
                                className={`${styles.menuItem} ${toggleClass === 'anime' ? styles.activeTab : ''}`}
                                onClick={() => handleClick('anime')}
                            >
                                <span>Аніме</span>
                                <RiArrowDropDownFill size={22} />
                            </div>
                            <BrowseModal active={active} setActive={setActive} toggleClass={toggleClass} setToggleClass={setToggleClass} />
                        </div>

                        <Link className={styles.menuItem}><span>Новини</span></Link>
                    </div>
                    <div className={styles.rightMenu}>
                        <LiveSearch />
                        {userToken ?
                            <div className={styles.dropdownMenuBox}>
                                <div
                                    className={`${styles.menuItem} ${toggleClass === 'user' ? styles.activeTab : ''}`}
                                    onClick={() => handleClick('user')}
                                >
                                    <span>{currentUser.name}</span>
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
                                    <RiArrowDropDownFill size={22} />
                                </div>
                                <UserActionsModal />
                            </div>
                            :
                            <div className={styles.dropdownMenuBox}>
                                <div
                                    className={`${styles.menuItem} ${toggleClass === 'auth' ? styles.activeTab : ''}`}
                                    onClick={() => handleClick('auth')}
                                >
                                    <AiOutlineUser size={22} />
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
    )
}

export default Header;