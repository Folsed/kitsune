import { useState } from 'react'
import { Logo } from '../../../assets/logo/Logo'
import { useLogin } from '../../../hooks/useLogin'
import { OrangeButton } from '../../../UI/buttons/OrangeButton'
import styles from './auth.module.css'


const AuthModal = ({ toggleClass }) => {
    const [action, setAction] = useState(0)

    // Auth States
    const { mutate, isError, isLoading } = useLogin()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({__html: ''})

    const onSubmit = (e) => {
        e.preventDefault();
        // setError({__html: ''})

        mutate({ name, email, password })
    }

    return (
        <div
            className={`${styles.authModal} ${toggleClass === 'auth' ? styles.activeAuthBox : ''} ${action === 0 ? styles.login : styles.register}`}
        >
            <div className={styles.authCanvas}>
                <Logo />
                {action === 0 ?
                // Login Form
                    <form action="" method='post'>
                        <div className={styles.formLogIn}>
                            <div className={styles.input}>
                                <input
                                    id="email"
                                    type="text"
                                    required="required"
                                    name="email"
                                />
                                <span>Email</span>
                                <div className={styles.shalf}></div>
                            </div>
                            <div className={styles.input}>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required="required"
                                />
                                <span>Password</span>
                                <div className={styles.shalf}></div>
                            </div>
                            <div className={styles.links}>
                                <a href="#">Забули пароль?</a>
                            </div>
                            <OrangeButton className={styles.authBtn} title={`Увійти`} type='submit' />
                            <div className={styles.linkAfter}>
                                {/* <strong>Ще немає облікового запису?</strong> */}
                                <span onClick={() => setAction(1)}>Реєстрація</span>
                            </div>
                        </div>
                    </form>
                    :
                    // Register Form
                    <form onSubmit={onSubmit}>
                        <div className={styles.formLogIn}>
                            <div className={styles.input}>
                                <input
                                    id="name"
                                    type="text"
                                    required="required"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <span>Name</span>
                                <div className={styles.shalf}></div>
                            </div>
                            <div className={styles.input}>
                                <input
                                    id="email"
                                    type="text"
                                    required="required"
                                    name="email"
                                    // value={email || ''}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span>Email</span>
                                <div className={styles.shalf}></div>
                            </div>
                            <div className={styles.input}>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    // value={password || ''}
                                    required="required"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span>Password</span>
                                <div className={styles.shalf}></div>
                            </div>
                            {/* <div className={styles.links}>
                                <a href="#">Забули пароль?</a>
                            </div> */}
                            <OrangeButton className={styles.authBtn} title={`Зареєструватися`} type='submit' />
                            <div className={styles.linkAfter}>
                                {/* <strong>Вже маєте акаунт?</strong> */}
                                <span onClick={() => setAction(0)}>Увійти</span>
                            </div>
                        </div>
                    </form>
                }


            </div>
        </div>
    )
}

export default AuthModal