import styles from './banner.module.css'
import { BlueBackground } from '../banner-bgs/BlueBackground'
import { WatchlistButton } from '../../../../UI/buttons/WatchlistButton'
import { OrangeButton } from '../../../../UI/buttons/OrangeButton'
import { OrangeBackground } from '../banner-bgs/OrangeBackground'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../../router/routes'
import ColoredBannerSkeleton from '../../../skeletons/colored-banner-skeleton/ColoredBannerSkeleton'
import useBanner from '../../../../hooks/anime/useBanner'


const background = {
    blue: <BlueBackground />,
    orange: <OrangeBackground />,
}

const ColoredBanner = ({ id, backgroundColor }) => {
    const { isLoading, isError, data: banner } = useBanner(id)


    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.bgWrapper}>
                    <div className={styles.mainBg}>
                        {background[backgroundColor]}
                    </div>
                    <div className={styles.innerBg}>

                    </div>
                </div>
                {isLoading ? <ColoredBannerSkeleton />
                    :
                    <>
                        <div className={styles.leftInfo}>
                            <div className={styles.leftInfoPromoWrapper}>
                                <div className={styles.leftInfoPromo}>
                                    <picture>
                                        <LazyLoadImage
                                            src={`http://127.0.0.1:8000/${banner.png_preview}`}
                                            alt=""
                                            title={banner.ua_title}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className={styles.leftInfoPreviewWrapper}>
                                <div className={styles.leftInfoPreview}>
                                    <NavLink className={styles.leftInfoLinkPreview} to={ROUTES.animePage(banner.anime_id, banner.alias)}>
                                        <picture>
                                            <LazyLoadImage
                                                src={`http://127.0.0.1:8000/${banner.preview}`}
                                                alt=""
                                                title={banner.ua_title}
                                            />
                                        </picture>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightInfoWrapper}>
                            <div className={styles.rightInfo}>
                                <a href="">
                                    <h3 className={styles.rightInfoTitle}>
                                        {banner.ua_title}
                                    </h3>
                                </a>
                                <span className={styles.rightInfoSubTitle}>Серіал | Озвучка</span>
                                <p className={styles.rightInfoDescription}>
                                    {banner.synopsis}
                                </p>
                            </div>
                            <div className={styles.rightInfoBtnWrapper}>
                                <NavLink to={ROUTES.animePage(banner.anime_id, banner.alias)} >
                                    <OrangeButton title={`Почати перегляд`} watch className={styles.watchBtn} />
                                </NavLink>
                                <WatchlistButton />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ColoredBanner
