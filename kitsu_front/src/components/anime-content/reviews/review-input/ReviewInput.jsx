import styles from './review-input.module.css'
import { userAuthContext } from '../../../../providers/AuthProvider'
import { OrangeButton } from '../../../../UI/buttons/OrangeButton';
import { BlackButton } from '../../../../UI/buttons/BlackButton';
import { useContext, useState } from 'react';
import { useAnimeCommentMutate } from '../../../../hooks/anime/useAnimeCommentMutate';
import Stars from '../../../../UI/review/Stars';
import Textarea from '../../../../UI/inputs/Textarea';
import ReviewContext from '../../../../providers/ReviewProvider';
import ReviewExists from './ReviewExists';


const ReviewInput = ({ animeId, reviewRef }) => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { currentUser } = userAuthContext()
    const { myReview } = useContext(ReviewContext)
    const { comment: leaveComment, errors, setErrors } = useAnimeCommentMutate(animeId)

    const [comment, setComment] = useState('')
    const [inputActive, setInputActive] = useState(false)
    const [rate, setRate] = useState()

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            comment: comment,
            user_id: currentUser.id,
            anime_id: animeId,
            user_name: currentUser.name,
            stars: rate,
        }

        leaveComment.mutateAsync(payload)
        setComment('')
        setInputActive(false)
    }

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.avatarWrap}>
                <div className={styles.avatar}>
                    {currentUser.avatar_softsize ?
                        <img
                            src={`${ROOT_URL}${currentUser.avatar_softsize}`}
                            alt=""
                        />
                        : ''
                    }
                </div>
            </div>
            {myReview ? myReview[0] ?
                <ReviewExists myReview={myReview[0]} reviewRef={reviewRef} />
                :
                <div className={styles.textareaWrap}>
                    <div className={styles.closedInput}>
                        <div className={styles.signature}>
                            <span>Відгук від</span>
                            <h4>{currentUser.name}</h4>
                        </div>
                        {inputActive ? '' :
                            <div className={styles.openBtn} >
                                <OrangeButton className={styles.commentBtn} title='Залишити відгук' onClick={() => setInputActive(true)} />
                            </div>
                        }
                    </div>
                    <form onSubmit={onSubmit} noValidate className={styles.reviewForm}>
                        <div className={styles.starsControls}>
                            <Stars
                                size={24}
                                isUsable={true}
                                infoEnabled={true}
                                rate={rate}
                                setRate={setRate}
                            />
                        </div>
                        {inputActive ?
                            <>
                                <div className={styles.textarea}>
                                    <Textarea
                                        className={`${styles.editableArea}`}
                                        placeholder='Залишити коментар'
                                        value={comment}
                                        setValue={setComment}
                                        minChars={100}
                                    ></Textarea>
                                </div>
                                <div className={styles.controls} >
                                    <BlackButton className={styles.commentBtn} title='Закрити' onClick={() => setInputActive(false)} />
                                    <OrangeButton
                                        className={`${styles.commentBtn} ${comment.length < 100 || !rate ? styles.blockBtn : ''}`}
                                        type={'submit'}
                                        title='Відправити'
                                    />
                                </div>
                            </>
                            : ''}
                    </form>
                </div>
                : ''
            }
        </div>
    )
}

export default ReviewInput