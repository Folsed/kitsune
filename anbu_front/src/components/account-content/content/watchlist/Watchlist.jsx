import styles from './watchlist.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { RiStarFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { RiDeleteBin6Line, RiEmotionSadLine } from "react-icons/ri";
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { userAuthContext } from '../../../../providers/AuthProvider'
import useWatchlistGet from '../../../../hooks/user/useWatchlistGet'
import { ROUTES } from '../../../../router/routes'
import WatchlistSkeleton from '../../../skeletons/mylist-skeleton/WatchlistSkeleton'
import useWatchlistAdd from '../../../../hooks/user/useWatchlistAdd'
import { useState } from 'react';
import { useEffect } from 'react';


const Watchlist = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { currentUser } = userAuthContext()
    const { data, isLoading, refetch } = useWatchlistGet(currentUser.id)
    const { watchlist } = useWatchlistAdd(refetch)
    const [myList, setMyList] = useState([])

    const formatDate = (date) => {
        const formattedDate = format(new Date(date), 'd MMMM yyyy', { locale: uk })
        const capitalizedMonth = formattedDate.replace(/(^|\s)(\p{Ll})/gu, change => change.toUpperCase())
        return capitalizedMonth
    }

    useEffect(() => {
        if (data) {
            setMyList(data)
        }
    }, [data])

    const onDelete = (animeId) => {
        const payload = {
            user_id: currentUser.id,
            anime_id: animeId,
        }
        watchlist.mutateAsync(payload)
        setMyList(myList.filter(item => item.id !== animeId))
        refetch()
    }

    return (
        <div className={styles.wrapper}>
            {isLoading ? <WatchlistSkeleton />
                : myList.length === 0 ?
                    <div className={styles.emptyList}>
                        <RiEmotionSadLine size={30} />
                        <span>Тут нічого немає</span>
                    </div>
                    :
                    myList.map((item, index) => (
                        <div className={styles.innerWrapper} key={item.id} id={item.id}>
                            <NavLink className={styles.listItem} to={ROUTES.animePage(item.id, item.alias)} />
                            <div className={styles.preview}>
                                {item.second_preview_path ?
                                    <>
                                        <picture>
                                            <LazyLoadImage src={`${ROOT_URL}${item.second_preview_path}`} alt="" />
                                        </picture>
                                    </>
                                    : ''}
                            </div>
                            <div className={styles.description}>
                                <div className={styles.title}>
                                    <h3 className={styles.animeName}>{item.ua_title}</h3>
                                    <div className={styles.right}>
                                        <div className={styles.rating}>
                                            <div className={styles.starsControls}>
                                                <RiStarFill size={18} />
                                            </div>
                                            <div className={styles.avgRating}>
                                                <span>Середня оцінка:</span>
                                                <span className={styles.avgNumber}>{item.review.stars} ({item.review.reviews})</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.synopsis}>
                                    <p>{item.synopsis}</p>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.addedAt}>
                                        <span>Додано:</span>
                                        <span className={styles.added}> {formatDate(item.created_at)}</span>
                                    </div>
                                    <div className={styles.deleteButton}>
                                        <button onClick={() => { onDelete(item.id) }}><RiDeleteBin6Line size={20} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Watchlist