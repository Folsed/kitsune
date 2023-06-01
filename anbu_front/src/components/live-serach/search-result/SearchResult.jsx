import styles from './fetched.module.css'
import { useSearchParams } from 'react-router-dom'
import useDebounce from '../../../helpers/useDebounce'
import { useAnimeSearch } from '../../../hooks/anime/useAnimeSearch'
import AnimeBigCard from '../../../UI/cards/AnimeBigCard'
import React from 'react'

const SearchResult = () => {
    const [searchParams] = useSearchParams()
    const debouncedQuery = useDebounce(searchParams.get('q'), 100)
    const { isLoading, isError, data: animes, status } = useAnimeSearch(debouncedQuery)

    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                {isLoading ? '' :
                    animes.map((item) => (
                        <React.Fragment key={item.id}>
                            <AnimeBigCard data={item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchResult