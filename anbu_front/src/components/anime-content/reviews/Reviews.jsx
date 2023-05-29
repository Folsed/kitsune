import styles from './comment.module.css'

import { useContext, useMemo, useRef } from 'react'
import AnimeContext from '../../../providers/AnimeProvider'
import ReviewInput from './review-input/ReviewInput'
import ReviewFeedback from './review-feedback/ReviewFeedback'
import { userAuthContext } from '../../../providers/AuthProvider'
import Warning from '../../../UI/warning/Warning'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import ReviewContext from '../../../providers/ReviewProvider'
import useMyReview from '../../../hooks/user/useMyReview'
import { useAnimeReviews } from '../../../hooks/anime/useAnimeReviews'

const Comments = ({ animeId }) => {
    const animeData = useContext(AnimeContext)
    const reviewRef = useRef(null)
    const { currentUser, userToken } = userAuthContext()
    const { data: myReview } = useMyReview(animeId)
    const { isLoading: commentsIsLoading, isError, data: reviews } = useAnimeReviews(animeId)


    if (animeData.isLoading) {
        return null
    }

    return (
        <ReviewContext.Provider value={{ myReview, reviews, commentsIsLoading }}>
            <div className={styles.commentsSection}>

                <div className={styles.sectionTitle} ref={reviewRef}>
                    <h2>Що скажеш про аніме "{animeData.data.ua_title}" ?</h2>
                </div>


                <div className={styles.wrapper}>
                    {userToken ? <ReviewInput animeId={animeId} reviewRef={reviewRef} /> : <Warning />}
                </div>


                <LazyLoadComponent>
                    <ReviewFeedback />
                </LazyLoadComponent>
            </div>
        </ReviewContext.Provider>
    )
}

export default Comments