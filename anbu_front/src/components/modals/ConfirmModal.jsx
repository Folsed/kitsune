import styles from './modal.module.css'

const ConfirmModal = () => {
    return (
        <div className={styles.confirmWrapper}>
            <div className={styles.confirmBody}>
                <span>Are you sure?</span>
                <div className={styles.confirmActions}>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal