import styles from './comment-input.module.css'

import { userAuthContext } from '../../../../providers/AuthProvider'
import { OrangeButton } from '../../../../UI/buttons/OrangeButton';
import { useState } from 'react';
import { useAnimeComments } from '../../../../hooks/useAnimeComments';
import { useAnimeCommentMutate } from '../../../../hooks/useAnimeCommentMutate';


const CommentInput = ({animeId}) => {
    const { currentUser } = userAuthContext()
    const { comment: leaveComment, errors, setErrors  } = useAnimeCommentMutate(animeId)
    const [comment, setComment] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            comment: comment,
            user_id: currentUser.id,
            anime_id: animeId,
            user_name: currentUser.name,
        };

        
        leaveComment.mutateAsync(payload)
        // refetch()
        setComment('')
    }

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.avatarWrap}>
                <div className={styles.avatar}></div>
            </div>
            <div className={styles.textareaWrap}>
                <div className={styles.signature}>
                    <span>Коментар від</span>
                    <h4>{currentUser.name}</h4>
                </div>
                <form onSubmit={onSubmit} noValidate>
                    <div className={styles.textarea}>
                        <textarea
                            className={`${styles.editableArea}`}
                            id="comment"
                            placeholder='Залишити коментар'
                            value={comment}
                            onChange={(e) => {setComment(e.target.value)}}
                        ></textarea>
                    </div>
                    <div className={styles.controls}>

                        <OrangeButton className={styles.commentBtn} type={'submit'} title='Додати' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentInput