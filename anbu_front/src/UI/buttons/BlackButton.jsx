import styles from './button.module.css'

export const BlackButton = ({ title, className }) => {
    return (
        <div className={`${className}`}>
            <a href="#">
                <button className={styles.btn}>
                    <span>{title}</span>
                </button>
            </a>
        </div>
    )
}
