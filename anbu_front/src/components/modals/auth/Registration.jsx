import { useState } from 'react'
import { useRegistration } from '../../../hooks/user/useRegistration'
import { OrangeButton } from '../../../UI/buttons/OrangeButton'
import styles from './auth.module.css'

const Registration = ({setAction, setActive}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { registration, errors, setErrors } = useRegistration(setActive)



    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: name,
            email: email,
            password: password,
        };

        registration.mutateAsync(payload)

    }

    return (
        <>
            <form onSubmit={onSubmit} noValidate>
                {errors && errors.name && (<div>{errors.name}</div>)}
                {errors && (<div>{errors.email}</div>)}
                {errors && (<div>{errors.password}</div>)}

                <div className={styles.formRegistration}>
                    <div className={`${styles.input} ${errors && errors.name ? styles.uncorrect : ''}`}>
                        <input
                            id="name"
                            type="text"
                            required
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span>Name</span>
                        <div className={styles.shalf}></div>
                    </div>
                    <div className={`${styles.input} ${errors && errors.email ? styles.uncorrect : ''}`}>
                        <input
                            id="email"
                            type="text"
                            required
                            name="email"
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
                            value={password}
                            required
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
        </>
    )
}

export default Registration