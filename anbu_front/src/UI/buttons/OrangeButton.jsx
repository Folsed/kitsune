import styles from './button.module.css'
import play from './../../img/icons/play-icon.png'


export const OrangeButton = ({title, className, type, watch}) => {
    return (
        <div className={className}>
            <button className={styles.watchBtn} type={type}>
                {watch ? <img src={play} alt="" />: ''}
                <span>{title}</span>
            </button>
        </div>
    )
}
