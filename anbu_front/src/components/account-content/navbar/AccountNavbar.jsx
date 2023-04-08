import { useState } from 'react'
import styles from './account-navbar.module.css'

const AccountNavbar = () => {
    const [activeTab, setActiveTab] = useState(0)

    const setTab = (index) => {
        setActiveTab(index)
    }

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbar}>
                <button className={`${styles.itemWrapper} ${activeTab === 0 ? styles.active : ''}`} onClick={() => { setTab(0) }}>
                    <div className={styles.item}>
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="22" data-view-component="true" className="octicon" fill='white'>
                            <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
                        </svg>
                        Огляд
                    </div>
                </button>
                <button className={`${styles.itemWrapper} ${activeTab === 1 ? styles.active : ''}`} onClick={() => { setTab(1) }}>
                    <div className={styles.item}>
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon" fill='white'>
                            <path d="M 3.6 5.35 A 0.75 0.75 0 0 1 4.35 4.6 h 4.253 c 1.227 0 2.317 0.59 3 1.501 A 3.743 3.743 0 0 1 14.606 4.6 h 4.245 a 0.75 0.75 0 0 1 0.75 0.75 v 10.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -4.507 a 2.25 2.25 0 0 0 -1.591 0.659 l -0.622 0.621 a 0.75 0.75 0 0 1 -1.06 0 l -0.622 -0.621 A 2.25 2.25 0 0 0 8.858 16.6 H 4.35 a 0.75 0.75 0 0 1 -0.75 -0.75 Z m 7.251 10.324 l 0.004 -5.073 l -0.002 -2.253 A 2.25 2.25 0 0 0 8.603 6.1 H 5.061 v 9 h 3.757 a 3.75 3.75 0 0 1 1.994 0.574 Z M 12.355 8.35 l -0.004 7.322 a 3.752 3.752 0 0 1 1.992 -0.572 H 18.1 v -9 h -3.495 a 2.25 2.25 0 0 0 -2.25 2.25 Z"></path>
                        </svg>
                        Переглядаю
                    </div>
                </button>
                <button className={`${styles.itemWrapper} ${activeTab === 2 ? styles.active : ''}`} onClick={() => { setTab(2) }}>
                    <div className={styles.item}>
                        <svg className="watchlist-btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-t="watchlist-svg" aria-labelledby="watchlist-svg" aria-hidden="true" role="img" fill='white'>
                            <path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path></svg>
                        Заплановано
                    </div>
                </button>
                <button className={`${styles.itemWrapper} ${activeTab === 3 ? styles.active : ''}`} onClick={() => { setTab(3) }}>
                    <div className={styles.item}>
                        <svg className="watchlist-btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-t="watchlist-svg" aria-labelledby="watchlist-svg" aria-hidden="true" role="img" fill='white'>
                            <path d="M 17 18.113 l -3.256 -2.326 A 2.989 2.989 0 0 0 12 15.228 c -0.629 0 -1.232 0.194 -1.744 0.559 L 7 18.113 V 4 h 10 v 14.113 z M 18 2 H 6 a 1 1 0 0 0 -1 1 v 17.056 c 0 0.209 0.065 0.412 0.187 0.581 a 0.994 0.994 0 0 0 1.394 0.233 l 4.838 -3.455 a 1 1 0 0 1 1.162 0 l 4.838 3.455 A 1 1 0 0 0 19 20.056 V 3 a 1 1 0 0 0 -1 -1 z M 9.448 9.98 L 8.46 11.027 L 11.615 13.44 L 15.541 7.901 L 14.523 6.985 L 11.309 11.407 L 9.463 9.98"></path></svg>
                        Переглянуто
                    </div>
                </button>
                <button className={`${styles.itemWrapper} ${activeTab === 4 ? styles.active : ''}`} onClick={() => { setTab(4) }}>
                    <div className={styles.item}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="star" fill='white'><path fill="none" d="M0 0h24v24H0V0z"></path><path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>
                        Оцінки
                    </div>
                </button>
            </div>
            <div className={styles.shalf}></div>
        </div>
    )
}

export default AccountNavbar