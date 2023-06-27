import React from 'react'
import styles from './cards-carousel.module.css'

import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import useWatchlistGet from '../../../hooks/user/useWatchlistGet';
import { userAuthContext } from '../../../providers/AuthProvider';
import CardsCarousel from './CardsCarousel';
import WatchlistCard from '../../../UI/cards/WatchlistCard';

const WatchlistCards = ({ shalfColor }) => {
    const { currentUser } = userAuthContext()
    const { data } = useWatchlistGet(currentUser.id)
    console.log(data)

    return (
        <div>
            <div className="dfsa">
                <div className={styles.headingWrapper}>
                    <div className={styles.feedHeading}>
                        <div className={styles.wlHeading}>
                            <h2 className={styles.feedHeadingTitle}>Планую подивитись</h2>
                            <NavLink>
                                <span>
                                    Мій список <MdKeyboardArrowRight size={16} />
                                </span>
                            </NavLink>
                        </div>
                        <div
                            className={styles.feedHeadingShalf}
                            style={{
                                background: shalfColor
                            }}
                        >
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.wlCardsBox}>
                        {(data ? data : []).map((item) => (
                            <WatchlistCard key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchlistCards