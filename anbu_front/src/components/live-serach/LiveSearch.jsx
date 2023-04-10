import styles from './live-search.module.css'
import search from './../../assets/icons/search.svg'
import { useEffect, useState } from 'react'
import { useAnimeSearch } from '../../hooks/useAnimeSearch'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../router/routes';
import LiveSearchSkeleton from '../skeletons/live-search-skeleton/LiveSearchSkeleton'


const LiveSearch = () => {
    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState(false)
    const { isLoading, isError, data: animes, status } = useAnimeSearch({ title: query })

    // if(animes.length === 0) {
    //     console.log('empty')
    // }

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
                    onChange={({ target }) => setQuery(target.value)}
                    onBlur={() => { setFocus(false) }}
                    onFocus={() => { setFocus(true) }}
                />
            </div>
            <ul className={`${styles.searchAutocomplete} ${focus === true ? styles.active : ''}`}>
                {animes && animes.length > 0 ? animes.map((item, i) => (
                    <li className={styles.autocompleteItem} key={i}>
                        <NavLink
                            to={ROUTES.animePage(item.id, item.alias)}
                            onFocus={() => { setFocus(true) }}
                            onClick={() => setQuery('')}
                        >
                            {item.ua_title} <span>({item.en_title}, {item.aired})</span>
                        </NavLink>
                    </li>
                )) : isLoading ? <LiveSearchSkeleton /> : animes && animes.length === 0 ?
                    <li className={styles.autocompleteItemError}>
                            Не вдалося нічого знайти
                    </li>
                    : ''}
            </ul>
        </div>
    )
}

export default LiveSearch