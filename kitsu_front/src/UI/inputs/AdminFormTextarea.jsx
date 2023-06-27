import styles from './input.module.css'

const AdminFormTextarea = ({ type, id, name, value, className, placeholder, onClick, maxChars, minChars, setValue }) => {

    function maxHandleChange(event) {
        const newValue = event.target.value
        if (newValue.length <= maxChars) {
            setValue(newValue);
        }
    }

    function minHandleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className={`${styles.inputField} ${className ? className : ''}`}>
            <textarea
                type={type}
                id={id}
                name={name}
                required
                value={value}
                onClick={onClick}
                onChange={maxChars ? maxHandleChange : minHandleChange}
                maxLength={maxChars}
                minLength={minChars}
            />
            <span>{placeholder}</span>
            {maxChars ?
                <p className={`${styles.charsCounter} ${value.length === maxChars ? styles.block : ''}`}>{value.length}/{maxChars}</p>
                : minChars ?
                    <p className={`${styles.charsCounter} ${value.length === maxChars ? styles.block : ''}`}>Мінімум {minChars} символів</p>
                    : ''
            }
        </div>
    )
}

export default AdminFormTextarea