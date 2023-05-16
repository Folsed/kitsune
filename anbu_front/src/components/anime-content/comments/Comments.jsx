import styles from './comment.module.css'

import { useContext } from 'react'
import AnimeContext from '../../../providers/AnimeProvider'
import CommentInput from './comment-input/CommentInput'
import Feedback from './comment-feedback/Feedback'
import { userAuthContext } from '../../../providers/AuthProvider'
import Warning from '../../../UI/warning/Warning'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import ReviewContext from '../../../providers/ReviewProvider'
import useMyReview from '../../../hooks/user/useMyReview'
import { useAnimeComments } from '../../../hooks/anime/useAnimeComments'

const Comments = ({ animeId }) => {
    const animeData = useContext(AnimeContext)
    const { currentUser, userToken } = userAuthContext()
    const { data: myReview } = useMyReview(animeId)
    const { isLoading: commentsIsLoading, isError, data: comments } = useAnimeComments(animeId)


    if (animeData.isLoading) {
        return null
    }

    return (
        <ReviewContext.Provider value={{ myReview, comments, commentsIsLoading }}>
            <div className={styles.commentsSection}>

                <div className={styles.sectionTitle}>
                    <h2>Що скажеш про аніме "{animeData.data.ua_title}" ?</h2>
                </div>
                

                <div className={styles.wrapper}>
                    {userToken ? <CommentInput animeId={animeId} /> : <Warning />}
                </div>


                <LazyLoadComponent>
                    <Feedback animeId={animeId} />
                </LazyLoadComponent>
            </div>
        </ReviewContext.Provider>
    )
}

export default Comments