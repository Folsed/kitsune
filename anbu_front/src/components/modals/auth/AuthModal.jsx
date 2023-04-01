import { useState } from 'react'
import { Logo } from '../../../assets/logo/Logo'
import { useRegistration } from '../../../hooks/useRegistration'
import { OrangeButton } from '../../../UI/buttons/OrangeButton'
import styles from './auth.module.css'
import Login from './Login'
import Registration from './Registration'


const AuthModal = ({ toggleClass, setActive }) => {
    const [action, setAction] = useState(0)

    return (
        <div
            className={`${styles.authModal} ${toggleClass === 'auth' ? styles.activeAuthBox : ''}`}
        >
            <div className={styles.authCanvas}>

                <Logo />
                {action === 0 ?
                    // Login Form
                    <Login setAction={setAction} setActive={setActive} />
                    :
                    // Register Form
                    <Registration setAction={setAction}  setActive={setActive}/>
                }


            </div>
        </div>
    )
}

export default AuthModal