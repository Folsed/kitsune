import styles from './comment-input.module.css'
const CommentInput = () => {
  return (
    <div className={styles.inputWrapper}>
        <div className={styles.avatarWrap}>
            <div className={styles.avatar}></div>
        </div>
        <div className={styles.textareaWrap}>
            <div className={styles.signature}>
                <span>Коментар від</span>
                <h4>Nickname</h4>
            </div>
            <div className={styles.textarea}>
                <textarea className={`${styles.editableArea} ${styles.disabled}`} id="" placeholder='Залишити коментар'></textarea>
            </div>
            {/* <div className={styles.controls}>

            </div> */}
        </div>
    </div>
  )
}

export default CommentInput