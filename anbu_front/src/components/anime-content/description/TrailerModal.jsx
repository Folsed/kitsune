import styles from './description.module.css'
import YouTube from 'react-youtube'


const TrailerModal = ({ setActive, link }) => {
    const opts = {
        width: '100%',
        height: '666px',
        playerVars: {
            autoplay: 0,
        },

    }
    return (
        <div className={`${styles.trailerWrapper}`} onClick={() => setActive(false)}>
            <div className={`${styles.blackout}`} ></div>
            <div className={styles.trailer}>
                <div className={styles.video}>
                    <YouTube videoId={link} opts={opts} />
                </div>
            </div>
        </div>
    )
}

export default TrailerModal