import { useContext, useState } from 'react'
import styles from './account-navbar.module.css'
import { AiOutlineUser } from 'react-icons/ai'
import { TbBook } from 'react-icons/tb'
import { RiBookmarkFill, RiBookmarkLine, RiStarLine } from 'react-icons/ri'
import { tabs } from './Tabs'
import AccountContext from '../../../providers/AccountProvider'


const AccountNavbar = () => {
    const { activeTab, setActiveTab } = useContext(AccountContext)


    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbar}>
                {tabs.map((item, index) => (
                    <button
                        key={index}
                        className={`${styles.itemWrapper} ${activeTab === index ? styles.active : ''}`}
                        onClick={() => { setActiveTab(index) }}
                    >
                        <div className={styles.item}>
                            {item.icon}
                            {item.name}
                        </div>
                    </button>
                ))}
            </div>
            <div className={styles.shalf}></div>
        </div>
    )
}

export default AccountNavbar