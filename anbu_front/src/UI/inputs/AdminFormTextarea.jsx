import styles from './input.module.css'

const AdminFormTextarea = ({ type, id, name, value, className, placeholder, onClick, onChange }) => {
    return (
        <div className={`${styles.inputField} ${className ? className : ''}`}>
            <textarea
                type={type}
                id={id}
                name={name}
                required
                value={value}
                onClick={onClick}
                onChange={onChange}
            />
            <span>{placeholder}</span>
        </div>
    )
}

export default AdminFormTextarea