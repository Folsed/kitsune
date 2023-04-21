import styles from './button.module.css'

export const BlackButton = ({ title, className, type }) => {
    return (
        <div className={``}>
                <button className={`${styles.btn} ${className}`} type={type}>
                    <span>{title}</span>
                </button>
        </div>
    )
}
