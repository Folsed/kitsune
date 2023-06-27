import styles from './modal.module.css'


const EditModal = ({ setActive, active, setToggleClass, toggleClass }) => {



    return (
        <div className={styles.modalDisplay}>
            <div className={styles.modalWrapper}>
            </div>
            <div
                className={`${styles.blackout} ${active ? styles.activeBlacout : ''}`}
                onClick={() => { setActive(false); setToggleClass('') }}
            ></div>
        </div>
    )
}

export default EditModal