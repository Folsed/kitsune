import styles from './comment.module.css'

import { useContext } from 'react'
import AnimeContext from '../../../providers/AnimeProvider'
import CommentInput from './comment-input/CommentInput'
import Feedback from './comment-feedback/Feedback'

const Comments = () => {
    const animeData = useContext(AnimeContext)

    if (animeData.isLoading) {
        return <p>Loading</p>
    }

    const data = animeData.data
    console.log(data)

    return (
        <div className={styles.commentsSection}>
            <div className={styles.sectionTitle}>
                <h2>Що скажеш про аніме "{data.ua_title}" ?</h2>
            </div>

            <CommentInput />

            <Feedback />
        </div>
    )
}

export default Comments