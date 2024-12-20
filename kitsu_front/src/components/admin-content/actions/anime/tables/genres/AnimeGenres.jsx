import styles from '../../../table.module.css'
import { useAnimesPagination } from '../../../../../../hooks/anime/useAnimesPagination'
import { useState } from 'react'
import { Arrow } from '../../../../../../utils/helpers/Arrow'
import { useAnimeDestroy } from '../../../../../../hooks/admin/useAnimeDestroy'
import TablesSkeleton from '../../../../../skeletons/tables/TablesSkeleton'
import { useAnimeTableSearch } from '../../../../../../hooks/admin/useAnimeTableSearch'
import search from '../../../../../../assets/icons/search.svg'
import { ReactComponent as SpinnerIcon } from '../../../../../../assets/icons/spinner.svg'
import { ReactComponent as EditIcon } from '../../../../../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../../../../../assets/icons/delete.svg'
import { ReactComponent as VerticalDotsIcon } from '../../../../../../assets/icons/vertical-dots.svg'
import { useGenres } from '../../../../../../hooks/anime/useGenres'

const AnimeGenres = () => {
    const size = 15
    const [page, setPage] = useState(1)
    const { isLoading, isError, data: animes, refetch } = useAnimesPagination(size, page)
    const { animeDestroy } = useAnimeDestroy(refetch)
    const [query, setQuery] = useState('')
    const { isLoading: searchLoading, isError: searchErrors, data: searchData, status } = useAnimeTableSearch({ title: query })
    const {data: genres} = useGenres()
    console.log(genres)


    const handleDestroy = (id) => {
        const payload = {
            id: id,
        }
        animeDestroy.mutateAsync(payload)
    }

    return (
        <div className={styles.secondBody}>
            <div className={styles.tableSearchWrapper}>
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
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.thead}>
                                <th>ID</th>
                                <th>Назва(ua)</th>
                                <th>Назва(en)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(query && searchData ? searchData.data.animes : genres).map((item) => (
                                <tr className={styles.tbody} key={item.id}>
                                    <td><span>{item.id}</span></td>
                                    <td className={styles.title}><span>{item.name}</span></td>
                                    <td className={styles.title}><span>{item.en_name}</span></td>
                                    <td className={styles.actions}>
                                        <button><EditIcon /></button>
                                        <button
                                            onClick={() => handleDestroy(item.id)}
                                        >
                                            <DeleteIcon />
                                        </button>
                                        <button><VerticalDotsIcon /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

export default AnimeGenres