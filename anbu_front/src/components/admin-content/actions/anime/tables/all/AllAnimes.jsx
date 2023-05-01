import styles from './../table.module.css'
import { useAnimesPagination } from '../../../../../../hooks/useAnimesPagination'
import { useState } from 'react'
import { Arrow } from '../../../../../../utils/helpers/Arrow'
import { useAnimeDestroy } from '../../../../../../hooks/admin/useAnimeDestroy'
import TablesSkeleton from '../../../../../skeletons/tables/TablesSkeleton'
import { useAnimeTableSearch } from '../../../../../../hooks/admin/useAnimeTableSearch'
import search from '../../../../../../assets/icons/search.svg'
import { ReactComponent as SpinnerIcon } from '../../../../../../assets/icons/spinner.svg'
import { ReactComponent as EditIcon } from '../../../../../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../../../../../assets/icons/delete.svg'
import { ReactComponent as DotIcon } from '../../../../../../assets/icons/dot.svg'
import { ReactComponent as VerticalDotsIcon } from '../../../../../../assets/icons/vertical-dots.svg'
import EditModal from '../../../../../modals/admin/EditModal'
import DetailsModal from '../../../../../modals/admin/DetailsModal'

const AllAnimes = () => {
    const size = 15
    const [page, setPage] = useState(1)
    const { isLoading, isError, data: animes, refetch } = useAnimesPagination(size, page)
    const { animeDestroy } = useAnimeDestroy(refetch)
    const [query, setQuery] = useState('')
    const { isLoading: searchLoading, isError: searchErrors, data: searchData, status } = useAnimeTableSearch({ title: query })
    const [animeId, setAnimeId] = useState(null)
    const [active, setActive] = useState(false)
    const [toggleClass, setToggleClass] = useState('')

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

    return (
        <div className={styles.secondBody}>
            <div className={styles.tableSearchWrapper}>
                <div className={styles.totalPosts}>
                    <p>Total:</p>
                    <span>{animes ? animes.total : <SpinnerIcon />}</span>
                </div>
                <div className={styles.tableSearch}>
                    <div className={styles.searchIcon}>
                        {searchLoading ? <SpinnerIcon /> : <img src={search} alt="" />}
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
                                                onClick={() => { setAnimeId(item.id) }}
                                                title='Редагувати'
                                            >
                                                <EditIcon /></button>
                                            <button
                                                onClick={() => handleDestroy(item.id)}
                                                title='Видалити'
                                            >
                                                <DeleteIcon />
                                            </button>
                                            <button
                                                className={`${item.active === 1 ? styles.activePost : ''}`}
                                                title='Змінити статус'
                                            >
                                                <DotIcon />
                                            </button>
                                            <button
                                                onClick={() => { setActive(true); setToggleClass('details'); setAnimeId(item.id) }}
                                                title='Деталі'
                                            >
                                                <VerticalDotsIcon /></button>

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