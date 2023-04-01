import { useState } from 'react'
import { useLogin } from '../../../hooks/useLogin'
import { OrangeButton } from '../../../UI/buttons/OrangeButton'
import styles from './auth.module.css'


const Login = ({ setAction, setActive }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, errors, setErrors } = useLogin(setActive)



    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password: password,
        };

        login.mutateAsync(payload)

    }

    return (
        <>
            <form onSubmit={onSubmit} noValidate>
                {errors && (<div>{errors.email}</div>)}
                {errors && (<div>{errors.password}</div>)}

                <div className={styles.formLogIn}>
                    <div className={`${styles.input} ${errors && errors.email ? styles.uncorrect : ''}`}>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span>Email</span>
                        <div className={styles.shalf}></div>
                    </div>
                    <div className={`${styles.input} ${errors && errors.password ? styles.uncorrect : ''}`}>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>Password</span>
                        <div className={styles.shalf}></div>
                    </div>
                    <div className={styles.links}>
                        <a href="#">Забули пароль?</a>
                    </div>
                    <OrangeButton className={styles.authBtn} title={`Увійти`} type='submit'/>
                    <div className={styles.linkAfter}>
                        {/* <strong>Ще немає облікового запису?</strong> */}
                        <span onClick={() => setAction(1)}>Реєстрація</span>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login