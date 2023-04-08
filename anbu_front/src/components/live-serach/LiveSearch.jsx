import styles from './live-search.module.css'
import search from './../../assets/icons/search.svg'
import { useEffect, useState } from 'react'
import { useAnimeSearch } from '../../hooks/useAnimeSearch'

const LiveSearch = () => {
    const [query, setQuery] = useState('')
    const { isLoading, isError, data } = useAnimeSearch({title: query})


    useEffect(() => {
      if(query) {
      }
    
 
    }, [query])
    

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
                <img src={search} alt="" />
            </div>
            <label className={styles.search}>
                <input type="text" placeholder="Пошук аніме" onChange={({target}) => setQuery(target.value)}/>
            </label>
        </div>
    )
}

export default LiveSearch