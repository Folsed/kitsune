import styles from './comment-input.module.css'

import { userAuthContext } from '../../../../providers/AuthProvider'
import { OrangeButton } from '../../../../UI/buttons/OrangeButton';


const CommentInput = () => {
    const { currentUser } = userAuthContext()


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
                <form action="">
                    <div className={styles.textarea}>
                        <textarea className={`${styles.editableArea}`} id="" placeholder='Залишити коментар'  ></textarea>
                    </div>
                    <div className={styles.controls}>

                        <OrangeButton className={styles.commentBtn} type={'submit'} title='Додати'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentInput