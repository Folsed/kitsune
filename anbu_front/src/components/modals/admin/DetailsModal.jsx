import { useQuery } from 'react-query';
import { useAnime } from '../../../hooks/admin/useAnime';
import styles from './modal.module.css'

const DetailsModal = ({ setActive, active, setToggleClass, toggleClass, data }) => {

    return (
        <div className={styles.modalDisplay}>
            {toggleClass === 'details' ?
                <div className={styles.detailsWrapper}>
                    <div className={styles.header}>
                        <div className={styles.subPreview}>
                            <picture>
                                <img
                                    key=""
                                    src={`http://127.0.0.1:8000/${data.preview[0].sub_preview_path}`}
                                    alt=""
                                    title=""
                                />
                            </picture>
                        </div>
                        <div className={styles.logo}>
                            <img
                                src={`http://127.0.0.1:8000/${data.preview[0].logo_path}`}
                                loading="lazy"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.description}>
                            <h1>{data.ua_title}</h1>
                            <p className={styles.subTitle}>{data.en_title}</p>
                            <div className={styles.innerDesc}>
                                <strong>Рік: </strong>
                                <span>{data.aired}</span>
                                <hr />
                                <strong>Країна: </strong>
                                <span>{data.country}</span>
                                <hr />
                                <div className={styles.genresBox}>
                                    <strong>Жанри: </strong>
                                    {data.genres.map((item) => (
                                        <span key={item.id} >{item.name}</span>
                                    ))}
                                </div>
                                <hr />
                                <strong>Режисер: </strong>
                                <span>{data.director}</span>
                                <hr />
                                <strong>Студія: </strong>
                                <span>{data.studio}</span>
                                <hr />
                                <strong>Додано: </strong>
                                <span>{data.created_at}</span>
                                <hr />
                                <strong>Опис: </strong>
                                <span>{data.synopsis}</span>
                            </div>
                        </div>
                        <div className={styles.preview}>
                            <picture>
                                <img
                                    key=""
                                    src={`http://127.0.0.1:8000/${data.preview[0].preview_path}`}
                                    alt=""
                                    title=""
                                />
                            </picture>
                        </div>
                    </div>
                </div>
                : ''
            }
            <div
                className={`${styles.blackout} ${active ? styles.activeBlackout : ''}`}
                onClick={() => { setActive(false); setToggleClass(''); }}
            ></div>
        </div>
    )
}

export default DetailsModal