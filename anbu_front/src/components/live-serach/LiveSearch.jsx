import styles from './live-search.module.css'
import search from './../../assets/icons/search.svg'
import { useEffect, useState } from 'react'
import { useAnimeSearch } from '../../hooks/useAnimeSearch'
import { NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '../../router/routes';
import LiveSearchSkeleton from '../skeletons/live-search-skeleton/LiveSearchSkeleton'
import { useCallback } from 'react'
import useDebounce from '../../helpers/useDebounce'


const LiveSearch = () => {
    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState(false)
    const debouncedQuery = useDebounce(query, 100)
    const { isLoading, isError, data: animes, status } = useAnimeSearch(debouncedQuery)

    const location = useLocation();

    useEffect(() => {
        setQuery('');
    }, [location]);


    const handleInput = useCallback(async (e) => {
        setQuery(e.target.value)
    }, [])

    console.log(debouncedQuery)

    return (
        <div className={styles.searchContainer}>
            <div className={`${styles.searchField} ${isLoading ? styles.focused : focus === true && animes ? styles.focused : ''}`}>
                <div className={styles.searchIcon}>
                    <img src={search} alt="" />
                </div>
                <input
                    className={`${styles.inputField}`}
                    type="text"
                    placeholder="Пошук аніме"
                    value={query}
                    onChange={handleInput}
                    onBlur={() => { setFocus(false) }}
                    onFocus={() => { setFocus(true) }}
                    maxLength={200}
                />
            </div>
            <ul className={`${styles.searchAutocomplete} ${focus === true ? styles.active : ''}`}>
                {animes && animes.length > 0 ? animes.slice(0, 5).map((item, i) => (
                    <li className={styles.autocompleteItem} key={i}>
                        <NavLink
                            to={ROUTES.animePage(item.id, item.alias)}
                            onFocus={() => { setFocus(true) }}
                        >
                            {item.ua_title} <span>({item.en_title}, {item.aired})</span>
                        </NavLink>
                    </li>

                )) : isLoading ? <LiveSearchSkeleton /> : animes && animes.length === 0 ?
                    <li className={styles.autocompleteItemError}>
                        Не вдалося нічого знайти
                    </li>
                    : ''}
                {animes && animes.length > 5 && (
                    <li className={`${styles.autocompleteItem} ${styles.viewAllLi}`}>
                        <NavLink to={ROUTES.searchedAnimes(query)} >
                            Переглянути всі результати
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default LiveSearch