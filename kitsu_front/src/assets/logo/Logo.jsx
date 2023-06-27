import styles from './logo.module.css'
import logo from './main-logo.png'

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="" />
        </div>
    )
}
