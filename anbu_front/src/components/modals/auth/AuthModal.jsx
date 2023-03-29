import { useState } from 'react'
import { Logo } from '../../../assets/logo/Logo'
import { OrangeButton } from '../../../UI/buttons/OrangeButton'
import styles from './auth.module.css'


const AuthModal = ({ toggleClass }) => {
    const [action, setAction] = useState(0)

    return (
        <div
            className={`${styles.authModal} ${toggleClass === 'auth' ? styles.activeAuthBox : ''} ${action === 0  ? styles.login : styles.register}`}
        >
            <div className={styles.authCanvas}>
                <Logo />
                {action === 0 ?
                    <form action="" method='post'>
                        <div className={styles.formLogIn}>
                            <div className={styles.input}>
                                <input id="email" type="text" required="required"
                                    name="email" />
                                <span>Email</span>
                                <div className={styles.shalf}></div>
                            </div>
                            <div className={styles.input}>
                                <input id="password" type="password"
                                    name="password" required="required" />
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
                    <form action="" method='post'>
                        <div className={styles.formLogIn}>
                            <div className={styles.input}>
                                <input id="nickname" type="text" required="required"
                                    name="nickname" />
                                <span>Nickname</span>
                                <div className={styles.shalf}></div>
                            </div>
                            <div className={styles.input}>
                                <input id="email" type="text" required="required"
                                    name="email" />
                                <span>Email</span>
                                <div className={styles.shalf}></div>
                            </div>
                            <div className={styles.input}>
                                <input id="password" type="password"
                                    name="password" required="required" />
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