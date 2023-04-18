import styles from './user-info.module.css'

import avatar from './../../../img/avatar.jpg'
import { userAuthContext } from '../../../providers/AuthProvider'
import { BlackButton } from '../../../UI/buttons/BlackButton'

const UserInfo = () => {
    const { currentUser } = userAuthContext()

    return (
        <div className={styles.wrapper}>
            <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="" />
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.title}>
                    <div className={styles.nameBox}>
                        <h1>{currentUser.name}</h1>
                        <span className={styles.permission}>
                            {currentUser.roles[0].name}
                        </span>
                    </div>
                    <div className={styles.pronouns}>
                        <span>he/him</span>
                    </div>
                </div>
                <div className={styles.nextInfo}>
                    <div className={styles.email}>
                        <h4>Пошта: <span>{currentUser.email}</span></h4>
                    </div>
                    <div className={styles.bio}>
                        <h4>Про {currentUser.name}: <span>Lorem ipsum dolor sit.</span></h4>
                    </div>

                    <div className={styles.dates}>
                        <h4>Реєстрація: <span>23 Квітня 2023</span></h4>
                    </div>
                </div>
            </div>
            <div className={styles.editBtnWrapper}>
                <BlackButton title={`Редагувати профіль`} className={styles.editBtn} />
            </div>
        </div>
    )
}

export default UserInfo