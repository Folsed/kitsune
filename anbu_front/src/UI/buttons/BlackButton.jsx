import styles from './button.module.css'

export const BlackButton = ({ title, className }) => {
    return (
        <div className={``}>
                <button className={`${styles.btn} ${className}`} >
                    <span>{title}</span>
                </button>
        </div>
    )
}
