import { useContext, useEffect, useRef, useState } from 'react'
import styles from './search.module.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import AuthModalContext from '../../../providers/AuthModalProvider';

const LiveSearch = () => {
    const { setActive, setToggleClass } = useContext(AuthModalContext)
    const [searchIsActive, setSearchIsActive] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams({ q: '' })
    const [prevLocation, setPrevLocation] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const inputRef = useRef()

    useEffect(() => {
        location.pathname !== '/search' && setPrevLocation(location.pathname)
        if (inputRef.current && document.activeElement !== inputRef.current) {
            setSearchIsActive(false)
        }
    }, [location.pathname, setSearchIsActive])

    const handleInputChange = (event) => {
        const queryString = `?q=${encodeURIComponent(event?.target?.value)}`
        navigate(event.target.value ? `${ROUTES.animeSearch}${queryString}` : prevLocation)
    }

    const onBlur = (event) => {
        if (!event.target.value && !searchParams.get('q')) {
            setSearchIsActive(false)
        }
    }

    const onFocus = () => {
        setSearchIsActive(true)
        setActive(false)
        setToggleClass('')
    }

    return (
        <div
            className={`${styles.searchWrapper} ${searchIsActive ? styles.active : ''}`}
            onClick={() => setSearchIsActive(true)}
        >
            <div className={`${styles.searchBox} ${searchIsActive ? styles.searchActive : ''}`}>
                <AiOutlineSearch size={20} className={styles.searchIcon}/>
                {searchIsActive ?
                    <div
                        className={`${styles.searchInput} ${searchIsActive ? styles.activeInput : ''}`}
                    >
                        <input
                            type="text"
                            value={searchParams.get('q')}
                            onChange={handleInputChange}
                            autoFocus
                            onFocus={onFocus}
                            onBlur={onBlur}
                            ref={inputRef}
                            placeholder='Пошук аніме'
                        />
                    </div>
                    : ''}
            </div>
        </div>
    )
}

export default LiveSearch