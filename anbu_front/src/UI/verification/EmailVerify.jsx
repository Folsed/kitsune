import { useEffect, useState } from 'react'
import { userAuthContext } from '../../providers/AuthProvider'
import styles from './email-verify.module.css'
import { useLocation } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";


const EmailVerify = () => {
    const { currentUser } = userAuthContext()
    const [active, setActive] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentUser && !currentUser.email_verified_at) {
                setActive(true)
            }
        }, 5000)

        return () => clearTimeout(timeout)
    }, [location, currentUser])


    console.log(currentUser)
    return (
        <>
            {active ?
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div className={styles.message}>
                            <span>Будь-ласка, підтвердіть свою електонну пошту.</span>
                            <button>Добре!</button>
                        </div>
                        <div className={styles.close}>
                            <button onClick={() => setActive(false)}>
                                <RxCross2 size={24} />
                            </button>
                        </div>
                    </div>
                </div>
                : ''}
        </>
    )
}

export default EmailVerify