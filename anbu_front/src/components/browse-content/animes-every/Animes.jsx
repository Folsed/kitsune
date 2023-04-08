import { NavLink } from 'react-router-dom'
import { useAnimes } from '../../../hooks/useAnimes'
import styles from './../browse.module.css'
import { ROUTES } from '../../../router/routes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import EveryCardsBoxSkeleton from '../../skeletons/every-cards-skeleton/EveryCardsBoxSkeleton'

const Animes = () => {
    const { isLoading, isError, data } = useAnimes()

    return (
        <div>
            {isLoading ? <EveryCardsBoxSkeleton /> :
                <div className={styles.container}>
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    {data.map((item) => (
                        <div
                            className={`${styles.contentContainer}`}
                            key={item.id}
                        >

                            <div className={styles.extra}>
                                <NavLink to={ROUTES.animePage(item.id, item.alias)}>
                                    <div className={styles.innerContentContainer}>
                                        <div className={styles.preview}>
                                            {item.preview.map(preview => (
                                                <LazyLoadImage
                                                    loading='lazy'
                                                    key={preview.id}
                                                    src={`http://127.0.0.1:8000/${preview.preview_path}`}
                                                    alt=""
                                                    title={item.ua_title}
                                                />

                                            ))}
                                        </div>
                                        <div className={styles.description}>
                                            <h4>{item.ua_title}</h4>
                                            <div className={styles.innerSubDesc}>
                                                <span>Серій: 12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Animes