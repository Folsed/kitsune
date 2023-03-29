import { NavLink } from 'react-router-dom'
import styles from './feedback.module.css'


const Feedback = () => {

    return (
        <div className={styles.feedback}>
            <div className={styles.commentWrapp}>
            <div className={styles.comment}>
                    <div className={styles.avatarWrap}>
                        <div className={styles.avatar}></div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.signature}>
                            <NavLink to={'#'}>
                                <h4>Nickname</h4>
                            </NavLink>
                            <span>1 день тому</span>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.textSection}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam voluptatem nam quod rerum alias quia eveniet numquam possimus, in impedit nesciunt quidem mollitia reiciendis laborum officiis neque odio obcaecati quasi fugit tempora. Culpa optio a et soluta asperiores architecto?</p>
                            </div>
                        </div>
                        <div className={styles.action}>
                            Like | Reply
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback