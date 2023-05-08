import styles from './button.module.css'

export const BlackButton = ({ title, className, type, onClick }) => {
    return (
        <div className={``}>
                <button className={`${styles.btn} ${className}`} type={type} onClick={onClick} >
                    <span>{title}</span>
                </button>
        </div>
    )
}
