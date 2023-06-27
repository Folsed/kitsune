import styles from './reviews.module.css'
import { RiEmotionSadLine } from "react-icons/ri";
import { userAuthContext } from '../../../../providers/AuthProvider'
import { NavLink } from 'react-router-dom';
import { useMyReviews } from '../../../../hooks/user/useMyReviews';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import Stars from '../../../../UI/review/Stars'
import { ROUTES } from '../../../../router/routes'
import { formattedDate } from '../../../../helpers/formattedDate'

const Reviews = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { currentUser } = userAuthContext()
    const { data: reviews, isLoading } = useMyReviews(currentUser.id)
    const [showMore, setShowMore] = useState(Array(reviews && reviews.reviews.length).fill(false))

    const handleShowMore = (index) => {
        setShowMore(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }

    return (
        <div className={styles.wrapper}>
            {isLoading ? 'Loading'
                : reviews.reviews.length === 0 ?
                    <div className={styles.emptyList}>
                        <RiEmotionSadLine size={30} />
                        <span>Тут нічого немає</span>
                    </div>
                    :
                    reviews.reviews.map((item, i) => (
                        <div className={styles.innerWrapper} key={item.id}>
                            <div className={styles.infoSection}>
                                <div className={styles.userInfo}>
                                    <h4 className={styles.name}>
                                        {item.user_name}
                                    </h4>
                                    <div className={styles.avatar}>
                                        <picture>
                                            {currentUser.avatar_softsize ?
                                                <img
                                                    src={`${ROOT_URL}${currentUser.avatar_softsize}`}
                                                    alt={`${ROOT_URL}${currentUser.avatar_softsize}`}
                                                    loading='lazy'
                                                    title={currentUser.name}
                                                />
                                                : ''}
                                        </picture>
                                    </div>
                                </div>
                                <div className={styles.rateBox}>
                                    <Stars stars={item.stars} haveUser />
                                </div>
                                <div className={styles.additional}>
                                    <div className={styles.date}>
                                        <span>Дата: </span>
                                        <span className={styles.dateSpan}>{formattedDate(item.created_at)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.commentSection}>
                                <div className={styles.animeTitle}>
                                    <NavLink
                                        className={styles.navToAnime}
                                        to={ROUTES.animePage(item.anime_id, item.alias)}
                                    >
                                        <h3>{item.ua_title}</h3>
                                    </NavLink>
                                </div>
                                <div className={styles.expandableArea}>
                                    <div
                                        className={`${styles.text} ${item.text.length < 500 || showMore[i] ? styles.moreActive : ''}`}
                                    >
                                        {item.text.split('\n').map((paragraph, index) => (
                                            <React.Fragment key={index}>
                                                {paragraph}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                                <div className={`${styles.actions} ${item.text.length < 500 ? styles.smallText : ''}`}>
                                    {item.text.length > 500 ?
                                        <button
                                            onClick={() => handleShowMore(i)}
                                            className={styles.showBtn}
                                        >
                                            {showMore[i] ? 'Менше' : 'Показати більше'}
                                        </button>
                                        : ''}
                                    <NavLink to={`${ROUTES.animePage(item.anime_id, item.alias)}#my_review`}>
                                        <button className={styles.navBtn}>
                                            До відгуку<MdKeyboardArrowRight size={16} />
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div >
    )
}

export default Reviews
