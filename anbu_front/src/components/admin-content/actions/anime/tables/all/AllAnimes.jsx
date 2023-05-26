import styles from '../../../table.module.css'
import { useAnimesPagination } from '../../../../../../hooks/anime/useAnimesPagination'
import { useState } from 'react'
import { Arrow } from '../../../../../../utils/helpers/Arrow'
import { useAnimeDestroy } from '../../../../../../hooks/admin/useAnimeDestroy'
import TablesSkeleton from '../../../../../skeletons/tables/TablesSkeleton'
import { useAnimeTableSearch } from '../../../../../../hooks/admin/useAnimeTableSearch'
import search from '../../../../../../assets/icons/search.svg'
import DetailsModal from '../../../../../modals/admin/DetailsModal'
import Spinner from '../../../../../../UI/loader/Spinner'
import { MdOutlineModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from "react-icons/ri"
import { GoPrimitiveDot } from "react-icons/go"
import { BiDotsVertical } from "react-icons/bi"
import { useAnimeDeactivate } from '../../../../../../hooks/admin/useAnimeDeactivate'
import useAnimeWithPagination from '../../../../../../hooks/admin/useAnimeWithPagination'



const AllAnimes = () => {
    const size = 15
    const [page, setPage] = useState(1)
    const { isLoading, isError, data: animes, refetch } = useAnimeWithPagination(size, page)
    const { animeDestroy } = useAnimeDestroy(refetch)
    const [query, setQuery] = useState('')
    const { isLoading: searchLoading, isError: searchErrors, data: searchData, status } = useAnimeTableSearch({ title: query })
    const [animeId, setAnimeId] = useState(null)
    const [active, setActive] = useState(false)
    const [toggleClass, setToggleClass] = useState('')
    const { animeDeactivate } = useAnimeDeactivate(refetch)

    if (active) {
        document.body.classList.add('scroll-blocked')
    } else {
        document.body.classList.remove('scroll-blocked')
    }

    const handleDestroy = (id) => {
        const payload = {
            id: id,
        }
        animeDestroy.mutateAsync(payload)
    }

    const handleDeactivate = (id) => {
        const payload = {
            id: id,
        }
        animeDeactivate.mutateAsync(payload)
    }

    return (
        <div className={styles.secondBody}>
            <div className={styles.tableSearchWrapper}>
                <div className={styles.totalPosts}>
                    <p>Total:</p>
                    <span>{animes ? animes.total : <Spinner size={16} />}</span>
                </div>
                <div className={styles.tableSearch}>
                    <div className={styles.searchIcon}>
                        {searchLoading ? <Spinner size={16} /> : <img src={search} alt="" />}
                    </div>
                    <input
                        className={styles.searchField}
                        value={query}
                        onChange={({ target }) => setQuery(target.value)}
                        type="text"
                        placeholder='Пошук даних'
                    />
                </div>
            </div>
            <div className={styles.tableArea}>
                {isLoading ?
                    <TablesSkeleton />
                    :
                    <>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.thead}>
                                    <th>ID</th>
                                    <th>Назва(ua)</th>
                                    <th>Назва(en)</th>
                                    <th>Додано</th>
                                    <th>Редагування</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {(query && searchData ? searchData.data.animes : animes.data).map((item, index) => (
                                    <tr className={styles.tbody} key={item.id}>
                                        <td><span>{item.id}</span></td>
                                        <td className={styles.title}><span>{item.ua_title}</span></td>
                                        <td className={styles.title}><span>{item.en_title}</span></td>
                                        <td><span>{item.created_at}</span></td>
                                        <td><span>{item.updated_at}</span></td>
                                        <td className={styles.actions}>
                                            <button
                                                className={styles.actionButton}
                                                onClick={() => { setActive(true); setToggleClass('details'); setAnimeId(item.id) }}
                                                title='Деталі'
                                            >
                                                <BiDotsVertical size={18} />
                                            </button>
                                            <button
                                                className={`${item.active ? styles.activePost : ''}`}
                                                onClick={() => handleDeactivate(item.id)}
                                                title='Змінити статус'
                                            >
                                                <GoPrimitiveDot size={18} color='#333333' />
                                            </button>
                                            <button
                                                className={styles.actionButton}
                                                onClick={() => { setAnimeId(item.id) }}
                                                title='Редагувати'
                                            >
                                                <MdOutlineModeEdit size={18} />
                                            </button>
                                            <button
                                                className={styles.actionButton}
                                                onClick={() => handleDestroy(item.id)}
                                                title='Видалити'
                                            >
                                                <RiDeleteBin6Line size={14} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <DetailsModal
                            setActive={setActive}
                            active={active}
                            setToggleClass={setToggleClass}
                            toggleClass={toggleClass}
                            data={(query && searchData ? searchData.data.animes : animes.data).find(anime => anime.id === animeId)}
                        />
                    </>
                }
            </div>
            <div className={styles.navBtns}>
                <Arrow
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={() => setPage((page) => page - 1)}
                    disabled={page === 1}
                />

                <Arrow
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={() => setPage(page + 1)}
                    disabled={isLoading ? true : page === Math.ceil(animes.total / size)}
                />
            </div>
        </div >
    )
}

export default AllAnimes