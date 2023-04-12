import styles from './comment.module.css'

import { useContext } from 'react'
import AnimeContext from '../../../providers/AnimeProvider'
import CommentInput from './comment-input/CommentInput'
import Feedback from './comment-feedback/Feedback'
import { userAuthContext } from '../../../providers/AuthProvider'
import Warning from '../../../UI/warning/Warning'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const Comments = ({ animeId }) => {
    const animeData = useContext(AnimeContext)
    const { currentUser, userToken } = userAuthContext()
    if (animeData.isLoading) {
        return null
    }

    const data = animeData.data

    return (
        <div className={styles.commentsSection}>
            <div className={styles.sectionTitle}>
                <h2>Що скажеш про аніме "{data.ua_title}" ?</h2>
            </div>

            {userToken ? <CommentInput animeId={animeId} /> : <Warning />}


            <LazyLoadComponent>
                <Feedback animeId={animeId} />
            </LazyLoadComponent>
        </div>
    )
}

export default Comments