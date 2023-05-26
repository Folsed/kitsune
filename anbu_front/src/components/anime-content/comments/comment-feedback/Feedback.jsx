import { NavLink } from 'react-router-dom'
import styles from './feedback.module.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Stars from '../../../../UI/review/Stars'
import { useContext } from 'react'
import ReviewContext from '../../../../providers/ReviewProvider'


const Feedback = ({ animeId }) => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { comments, commentsIsLoading: isLoading } = useContext(ReviewContext)

    return (
        <div className={styles.feedback}>
            <div className={styles.commentWrapp}>
                {isLoading ? 'Loading'
                    :
                    comments.reviews.map((item, i) => (
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
                                        <Stars stars={item.user.user_star}/>
                                    </div>
                                    <div className={styles.body}>
                                        <div className={styles.textSection}>
                                            <p>{item.comment}</p>
                                        </div>
                                    </div>
                                    <div className={styles.action}>
                                        Like | Reply
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

export default Feedback