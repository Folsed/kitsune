import { useContext, useState } from 'react'
import styles from './navigation.module.css'
import AdminContext from '../../../providers/AdminProvider'
import { tabs } from './Tabs'

const Navigation = () => {
    const { active, setActive, setSubAction, setAction } = useContext(AdminContext)

    return (
        <div className={styles.navWrapper}>
            <div className={styles.nav}>
                {tabs.map((item, index) => (
                    <div className={styles.navPoint} key={index}>
                        <button
                            onClick={() => { setActive(item.value); setSubAction(''); setAction(item.action) }}
                            className={`${styles.navBtn} ${active === item.value ? styles.active : ''}`}
                        >
                            {item.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navigation