import styles from './confirm.module.css'
import { OrangeButton } from '../../../UI/buttons/OrangeButton'
import { BlackButton } from '../../../UI/buttons/BlackButton'


const ConfirmModal = ({ active, setActive, title, info, onConfirm }) => {

    if (active) {
        document.body.classList.add('scroll-blocked')
    } else {
        document.body.classList.remove('scroll-blocked')
    }

    return (
        <div className={`${styles.confirmModal} ${active ? styles.modalActive : ''}`}>
            <div className={`${styles.blackout} ${active ? styles.modalActive : ''}`} onClick={() => setActive(false)}></div>
            <div className={styles.modalWrapper}>
                <div className={styles.modalInfo}>
                    <h3>{title}</h3>
                    <span>{info}</span>
                </div>
                <div className={styles.modalActions}>
                    <OrangeButton
                        title={'Підтвердити'}
                        className={styles.modalButton}
                        onClick={onConfirm}
                    />
                    <BlackButton
                        title={'Закрити'}
                        className={styles.modalButton}
                        onClick={() => setActive(false)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal