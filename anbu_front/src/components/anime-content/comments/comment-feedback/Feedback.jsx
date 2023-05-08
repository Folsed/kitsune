import { NavLink } from 'react-router-dom'
import styles from './feedback.module.css'
import { useAnimeComments } from '../../../../hooks/anime/useAnimeComments'
import { LazyLoadComponent } from 'react-lazy-load-image-component'


const Feedback = ({ animeId }) => {
    const { isLoading, isError, data: comments } = useAnimeComments(animeId)

    return (
        <div className={styles.feedback}>
            <div className={styles.commentWrapp}>
                {isLoading ? 'Loading'
                    :
                    comments.map((item, i) => (
                        <LazyLoadComponent key={i}>
                            <div className={styles.comment} >
                                <div className={styles.avatarWrap}>
                                    <div className={styles.avatar}></div>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.signature}>
                                        <NavLink to={'#'}>
                                            <h4>{item.user.user_name}</h4>
                                        </NavLink>
                                        <span>{item.created_at}</span>
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