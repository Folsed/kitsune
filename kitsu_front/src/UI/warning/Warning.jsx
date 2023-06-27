import styles from './warning.module.css'
import warning from './../../assets/icons/warning.png'

const Warning = () => {
    return (
        <div className={styles.warningWrapper}>
            <div className={styles.warning}>
                <div className={styles.warningIcon}>
                    <img src={warning} alt="" />
                </div>
                <div className={styles.warningInfo}>
                    <h3>Увага!</h3>
                    <p>
                        Неавторизовані відвідувачі не можуть залишати коментарі.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Warning