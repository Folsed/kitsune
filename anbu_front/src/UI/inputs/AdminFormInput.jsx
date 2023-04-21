import styles from './input.module.css'

const AdminFormInput = ({ type, id, name, value, className, placeholder, onChange, onClick }) => {
    return (
        <div className={`${styles.inputField} ${className ? className : ''}`}>
            <input
                type={type}
                id={id}
                name={name}
                required
                value={value}
                onChange={onChange}
                onClick={onClick}
            />
            <span>{placeholder}</span>
        </div>
    )
}

export default AdminFormInput