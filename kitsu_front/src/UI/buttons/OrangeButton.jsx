import styles from './button.module.css'
import play from './../../img/icons/play-icon.png'


export const OrangeButton = ({title, className, type, watch, onClick}) => {
    return (
        <div className='orange_btn'>
            <button className={`${styles.watchBtn} ${className ? className : ''}`} type={type} onClick={onClick}>
                {watch ? <img src={play} alt="" />: ''}
                <span>{title}</span>
            </button>
        </div>
    )
}
