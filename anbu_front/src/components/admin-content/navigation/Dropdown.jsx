import { useContext } from 'react'
import styles from './navigation.module.css'
import AnimeContext from '../../../providers/AnimeProvider'

const Dropdown = ({ items }) => {
    const { subAction, setSubAction, active } = useContext(AnimeContext)

    return (
        <div className={styles.dropdownWrapper}>
            <ul className={styles.dropdown}>
                {items.map((item, i) => (
                    <li
                        key={i}
                        className={`${styles.dropdownItem} ${subAction === `anime-${item.label}` ? styles.active : ''}`}
                    >
                        <button onClick={() => { setSubAction(`anime-${item.label}`) }} >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Dropdown