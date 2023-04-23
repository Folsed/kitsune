import styles from './../table.module.css'
import { useAnimesPagination } from '../../../../../../hooks/useAnimesPagination'
import { useState } from 'react'
import { Arrow } from '../../../../../../utils/helpers/Arrow'
import { useAnimeDestroy } from '../../../../../../hooks/admin/useAnimeDestroy'
import TablesSkeleton from '../../../../../skeletons/tables/TablesSkeleton'

const AllAnimes = () => {
    const size = 15
    const [page, setPage] = useState(1)
    const { isLoading, isError, data: animes, refetch } = useAnimesPagination(size, page)
    const { animeDestroy } = useAnimeDestroy(refetch)


    const handleDestroy = (id) => {
        console.log(id)
        const payload = {
            id: id,
        }
        animeDestroy.mutateAsync(payload)
    }

    return (
        <div className={styles.secondBody}>
            <div className={styles.tableSearchWrapper}>
                <div className={styles.tableSearch}>
                    <input type="text" />
                </div>
            </div>
            <div className={styles.tableArea}>
                {isLoading ?
                    <TablesSkeleton/>
                    :
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
                            {animes.data.map((item) => (
                                <tr className={styles.tbody} key={item.id}>
                                    <td className={styles.elipsis}><span>{item.id}</span></td>
                                    <td className={`${styles.elipsis} ${styles.title}`}><span>{item.ua_title}</span></td>
                                    <td className={`${styles.elipsis} ${styles.title}`}><span>{item.en_title}</span></td>
                                    <td className={styles.elipsis}><span>{item.created_at}</span></td>
                                    <td className={styles.elipsis}><span>{item.updated_at}</span></td>
                                    <td className={styles.actions}>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14px" height="14px" fill="#dadada">    <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z" /></svg>
                                        </button>
                                        <button onClick={() => handleDestroy(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px" height="16px" fill='red'><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" /></svg>
                                        </button>
                                        <button className={`${item.active === 1 ? styles.activePost : ''}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252525" className="bi bi-dot" viewBox="0 0 24 24">
                                                <path d="M12.433 18.362a6.75 6.75 90 100-13.5 6.75 6.75 90 00-.076 13.5z" />
                                            </svg>
                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dadada" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </button>
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

export default AllAnimes