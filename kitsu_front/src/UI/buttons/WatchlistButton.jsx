import styles from './button.module.css'
import { ReactComponent as WatchlistIcon } from '../../assets/icons/watchlist.svg'
import { ReactComponent as ActiveWatchlistIcon } from '../../assets/icons/watchlist-active.svg'
import { userAuthContext } from '../../providers/AuthProvider'
import useWatchlistAdd from '../../hooks/user/useWatchlistAdd'
import AuthModalContext from '../../providers/AuthModalProvider'
import { useContext, useEffect, useState } from 'react'
import Spinner from '../loader/Spinner'


const WatchlistButton = ({ animeId }) => {
    const { currentUser, watchlist: mylist } = userAuthContext()
    const { setActive, setToggleClass } = useContext(AuthModalContext)
    const { watchlist } = useWatchlistAdd()

    const onClick = () => {
        const payload = {
            anime_id: animeId,
            user_id: currentUser.id,
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
                onClick={currentUser ? (watchlist.isLoading ? null : onClick) : loginHandler}
            >
                {animeExistsInWatchlist ?
                    <>
                        {watchlist.isLoading ? <Spinner size={22} /> : <ActiveWatchlistIcon />}
                        <span>У списку бажаного</span>
                    </>
                    :
                    <>
                        {watchlist.isLoading ? <Spinner size={22}/> : <WatchlistIcon />}
                        <span>Додати до бажаного</span>
                    </>
                }


            </button>
        </div>
    )
}
export default WatchlistButton