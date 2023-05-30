import styles from './review-input.module.css'
import Stars from '../../../../UI/review/Stars'
import React, { useEffect, useState } from 'react'
import { MdOutlineModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from "react-icons/ri"
import { isComponentVisible } from '../../../../helpers/isComponentVisible'
import ConfirmModal from '../../../modals/confirm-modal/ConfirmModal'
import { formattedDate } from '../../../../helpers/formattedDate'
import { useLocation } from 'react-router-dom'


const ReviewExists = ({ myReview, reviewRef }) => {
    const [showMore, setShowMore] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.hash === '#my_review') {
            reviewRef.current.scrollIntoView();
        }
    }, [location.hash])

    const handleShowMore = () => {
        if (showMore && !isComponentVisible(reviewRef.current)) {
            reviewRef.current.scrollIntoView();
        }
        setShowMore(prevState => !prevState);
    }

    return (
        <div className={`${styles.textareaWrap} ${styles.myReviewGap}`}>
            <div className={styles.mySignature}>
                <h4>{myReview.user_name}</h4>
                <span>{formattedDate(myReview.created_at)}</span>
            </div>
            <div className={styles.starsControls}>
                <Stars
                    size={24}
                    isUsable={false}
                    haveUser
                    stars={myReview.stars}
                />
            </div>
            <div className={styles.textWrapper}>
                <div className={`${styles.text} ${myReview.text.length < 500 || showMore ? styles.moreActive : ''}`}>
                    {myReview.text.split('\n').map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {paragraph}
                            <br />
                        </React.Fragment>
                    ))}
                </div>
                {myReview.text.length > 500 ?
                    <button
                        onClick={handleShowMore}
                        className={styles.showBtn}
                    >
                        {showMore ? 'Менше' : 'Показати більше'}
                    </button>
                    : ''}
            </div>
            <div className={styles.reviewFooter}>
                <div className={styles.reviewVotings}>
                    <span>Голосів ще немає</span>
                </div>
                <div className={styles.actions}>
                    <button>
                        <MdOutlineModeEdit size={18} />
                    </button>
                    <button>
                        <RiDeleteBin6Line size={18} onClick={() => setDeleteConfirm(true)} />
                    </button>
                </div>
            </div>
            <ConfirmModal
                active={deleteConfirm}
                setActive={setDeleteConfirm}
                title={'Видалити відгук'}
                info={'Ви дійсно хочете видалити свій відгук?'}
            />
        </div>
    )
}

export default ReviewExists