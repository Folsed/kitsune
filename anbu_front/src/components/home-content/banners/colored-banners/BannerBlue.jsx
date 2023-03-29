import styles from './banner.module.css'


import promo from './../../../../img/promo.png'
import preview from './../../../../img/anime-preview/prev1.jpg'
import { BlueBackground } from '../banner-bgs/BlueBackground'
import { WatchlistButton } from '../../../../UI/buttons/WatchlistButton'
import { OrangeButton } from '../../../../UI/buttons/OrangeButton'

const BannerBlue = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.bgWrapper}>
                    <div className={styles.mainBg}>
                        <BlueBackground/>
                    </div>
                    <div className={styles.innerBg}>

                    </div>
                </div>
                <div className={styles.leftInfo}>
                    <div className={styles.leftInfoPromoWrapper}>
                        <div className={styles.leftInfoPromo}>
                            <img src={promo} alt="" />
                        </div>
                    </div>
                    <div className={styles.leftInfoPreviewWrapper}>
                        <div className={styles.leftInfoPreview}>
                            <a className={styles.leftInfoLinkPreview} href=""><img src={preview} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.rightInfoWrapper}>
                    <div className={styles.rightInfo}>
                        <a href="">
                            <h3 className={styles.rightInfoTitle}>
                                Атака Титанів: Фінальний Сезон
                            </h3>
                        </a>
                        <span className={styles.rightInfoSubTitle}>Серіал | Озвучка</span>
                        <p className={styles.rightInfoDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis, voluptatem optio ducimus, quaerat sit delectus molestiae eius asperiores tempore adipisci eum illo aliquam fuga! Sapiente alias neque magnam, velit delectus provident et totam consequatur id inventore, labore voluptates repellendus ducimus cupiditate? Mollitia aliquid, dolor exercitationem dicta numquam quasi recusandae.

                        </p>
                    </div>
                    <div className={styles.rightInfoBtnWrapper}>
                        <OrangeButton title={`Почати перегляд`} watch/>
                        <WatchlistButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerBlue
