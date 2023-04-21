import styles from './input.module.css'

const AdminFormTextarea = ({ type, id, name, value, className, placeholder }) => {
    return (
        <div className={`${styles.inputField} ${className ? className : ''}`}>
            <textarea
                type={type}
                id={id}
                name={name}
                required
                value={value}
            />
            <span>{placeholder}</span>
        </div>
    )
}

export default AdminFormTextarea