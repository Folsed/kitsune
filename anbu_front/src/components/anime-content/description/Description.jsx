import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import YouTube from 'react-youtube'
import AnimeContext from '../../../providers/AnimeProvider'
import { OrangeButton } from '../../../UI/buttons/OrangeButton'
import { WatchlistButton } from '../../../UI/buttons/WatchlistButton'
import styles from './description.module.css'

const Description = () => {
    const animeData = useContext(AnimeContext)

    if (animeData.isLoading) {
        return <p>Loading</p>
    }

    const data = animeData.data
    console.log(animeData)

    const opts = {
        height: '230',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
        
      };

    return (
        <div>
            <div className={styles.body}>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <div className={styles.descSection}>
                            <div className={styles.heading}>
                                <h1>{data.ua_title}</h1>
                            </div>
                            <div className={styles.voice}>
                                <span>{data.translated}</span>
                            </div>
                            <div className={styles.starRating}>
                                <div className={styles.rate}>
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={styles.wlButton}>
                                    <WatchlistButton />
                                </div>
                            </div>
                            <div className={styles.synopsis}>
                                <p className={styles.synBlockText}>
                                    {data.synopsis}
                                </p>
                            </div>
                            <div className={styles.genres}>
                                    <div className={styles.categs}>
                                        {data.genres.map((item, i) => (
                                            <div className={styles.categDetailWrap} key={i}>
                                                <NavLink to={`#`}>
                                                    <div className={styles.categDetail}>
                                                        {item.name}
                                                    </div>
                                                </NavLink>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            <div className={styles.detailTable}>
                                <div className={styles.tableRow}>
                                    <div className={styles.leftCol}>
                                        <h4>Режисер: </h4>
                                    </div>
                                    <div className={styles.rightCol}>
                                        <h4>{data.director}</h4>
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.leftCol}>
                                        <h4>Студія: </h4>
                                    </div>
                                    <div className={styles.rightCol}>
                                        <h4>{data.studio}</h4>
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.leftCol}>
                                        <h4>Країна: </h4>
                                    </div>
                                    <div className={styles.rightCol}>
                                        <h4>{data.country}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.nextSection}>
                            <YouTube videoId={data.trailer} opts={opts}/>
                            <OrangeButton title={`Почати перегляд`} className={styles.actBtn} watch/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Description