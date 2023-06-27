import styles from './review-feedback.module.css'
import { NavLink } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Stars from '../../../../UI/review/Stars'
import React, { useContext, useState } from 'react'
import ReviewContext from '../../../../providers/ReviewProvider'
import { BiLike, BiDislike } from 'react-icons/bi'


const ReviewFeedback = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { reviews, commentsIsLoading: isLoading } = useContext(ReviewContext)
    const [showMore, setShowMore] = useState(Array(reviews.reviews.length).fill(false))

    const handleShowMore = (index) => {
        setShowMore(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }

    return (
        <div className={styles.feedback}>
            <div className={styles.commentWrapp}>
                {isLoading ? 'Loading'
                    :
                    reviews.reviews.map((item, i) => (
                        <LazyLoadComponent key={i}>
                            <div className={styles.comment} >
                                <div className={styles.avatarWrap}>
                                    <div className={styles.avatar}>
                                        {item.user.user_avatar ?
                                            <img
                                                src={`${ROOT_URL}${item.user.user_avatar}`}
                                                alt=""
                                            />
                                            : ''
                                        }
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.signature}>
                                        <NavLink to={'#'}>
                                            <h4>{item.user.user_name}</h4>
                                        </NavLink>
                                        <span>{item.created_at}</span>
                                    </div>
                                    <div className={styles.stars}>
                                        <Stars stars={item.stars} />
                                    </div>
                                    <div className={styles.body}>
                                        <div className={`${styles.textSection} ${item.text.length < 500 || showMore[i] ? styles.moreActive : ''}`}>
                                            {item.text.split('\n').map((paragraph, index) => (
                                                <React.Fragment key={index}>
                                                    {paragraph}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    {item.text.length > 500 ?
                                        <button
                                            onClick={() => handleShowMore(i)}
                                            className={styles.showBtn}
                                        >
                                            {showMore[i] ? 'Менше' : 'Показати більше'}
                                        </button>
                                        : ''}
                                    <div className={styles.action}>
                                        <span>Чи вважаєте ви цей відгук корисним?</span>
                                        <div className={styles.votes}>
                                            <button><BiLike size={16} /></button>
                                            <span>{item.likes}</span>
                                            <button><BiDislike size={16} /></button>
                                            <span>{item.dislikes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </LazyLoadComponent>
                    ))
                }
            </div>
        </div>
    )
}

export default ReviewFeedback