import { Logo } from '../../assets/logo/Logo'
import { OrangeButton } from '../../UI/buttons/OrangeButton'
import styles from './auth.module.css'

const Register = () => {
    return (
        <div
            className={`${styles.authModal}`}
        >
            <div className={styles.authCanvas}>
                <Logo />
                    <form>
                        <div className={styles.formLogIn}>
                            <div className={styles.input}>
                                <input
                                    id="name"
                                    type="text"
                                    required="required"
                                    name="name"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
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
                                    // onChange={(e) => setEmail(e.target.value)}
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
                                    // onChange={(e) => setPassword(e.target.value)}
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
                                <span>Увійти</span>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Register