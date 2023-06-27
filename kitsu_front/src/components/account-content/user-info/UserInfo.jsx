import styles from './user-info.module.css'
import { userAuthContext } from '../../../providers/AuthProvider'
import { BlackButton } from '../../../UI/buttons/BlackButton'
import { useState } from 'react'
import UserEdit from './UserEdit'
import { formattedDate } from '../../../helpers/formattedDate'

const UserInfo = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { currentUser } = userAuthContext()
    const [editIsActive, setEditIsActive] = useState(false)

    return (
        <div className={styles.wrapper}>
            {!editIsActive ?
                <>
                    <div className={styles.avatarWrapper}>
                        <div className={styles.avatar}>
                            {currentUser.avatar_softsize ?
                                <img
                                    src={`${ROOT_URL}${currentUser.avatar}`}
                                    alt=""
                                />
                                : ''
                            }
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
                                <span>{currentUser.pronoun}</span>
                            </div>
                        </div>
                        <div className={styles.nextInfo}>
                            <div className={styles.email}>
                                <h4>Пошта: <span>{currentUser.email}</span></h4>
                            </div>
                            <div className={styles.bio}>
                                <h4>Про {currentUser.name}: <span>{currentUser.bio}</span></h4>
                            </div>

                            <div className={styles.dates}>
                                <h4>Реєстрація: <span>{formattedDate(currentUser.created_at)}</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.editBtnWrapper}>
                        <BlackButton title={`Редагувати профіль`} className={styles.editBtn} onClick={() => setEditIsActive(true)} />
                    </div>
                </>
                :
                <UserEdit setEditIsActive={setEditIsActive} />
            }

        </div>
    )
}

export default UserInfo