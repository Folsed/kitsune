import styles from './live-search.module.css'
import search from './../../assets/icons/search.svg'
import { useEffect, useState } from 'react'
import { useAnimeSearch } from '../../hooks/useAnimeSearch'

const LiveSearch = () => {
    const [query, setQuery] = useState('')
    const { isLoading, isError, data, status } = useAnimeSearch({ title: query })

    if( status === 'idle' ) {
        console.log('empty')
    }

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
                <img src={search} alt="" />
            </div>
            <label className={styles.search}>
                <input type="text" placeholder="Пошук аніме" onChange={({ target }) => setQuery(target.value)} />
            </label>
            <ul className={styles.searchAutocomplete}>
                {status === 'success' ? data.data.movies.map((item, i) => (
                    <li key={i}>{item.ua_title}</li>
                )) : ''}
                {/* {status === 'success' ? 'loading':data.data.movies.map((item, i) => (
                    <li key={i}>{item.ua_title}</li>
                ))} */}
            </ul>
        </div>
    )
}

export default LiveSearch