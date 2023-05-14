import styles from './button.module.css'
import { ReactComponent as WatchlistIcon } from '../../assets/icons/watchlist.svg'
import { ReactComponent as ActiveWatchlistIcon } from '../../assets/icons/watchlist-active.svg'
import { userAuthContext } from '../../providers/AuthProvider'
import useWatchlistAdd from '../../hooks/user/useWatchlistAdd'
import AuthModalContext from '../../providers/AuthModalProvider'
import { useContext, useState } from 'react'


const WatchlistButton = ({ animeId }) => {
    const { currentUser, watchlist: mylist } = userAuthContext()
    const { active, setActive, toggleClass, setToggleClass } = useContext(AuthModalContext)
    const { watchlist } = useWatchlistAdd()
    const [wlCheck, setWlCheck] = useState(false)

    const onClick = () => {
        const payload = {
            anime_id: animeId,
            user_id: currentUser.id,
        }
        if(!wlCheck) {
            setWlCheck(true)
        } else {
            setWlCheck(false)
        }
        watchlist.mutateAsync(payload)
    }
    const animeExistsInWatchlist = mylist ? mylist.some((item) => item === animeId) : false

    const loginHandler = () => {
        setActive(true)
        setToggleClass('auth')
    }

    return (
        <div className={styles.watchlistBtnWrapper}>
            <button
                className={`${styles.watchlistBtn}`}
                onClick={currentUser ? onClick : loginHandler}
            >
                {animeExistsInWatchlist ?
                    <>
                        <ActiveWatchlistIcon />
                        <span>У списку бажаного</span>
                    </>
                    :
                    <>
                        <WatchlistIcon />
                        <span>Додати до бажаного</span>
                    </>
                }


            </button>
        </div>
    )
}
export default WatchlistButton