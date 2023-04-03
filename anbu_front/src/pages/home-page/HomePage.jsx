import './home-page.css'
import disableKeyboardScroll from '../../helpers/disabledKeyboardScroll'

// Components 
import { ViewAll } from '../../components/view-all/ViewAll'
import CarouselGeneral from '../../components/carousel/CarouselGeneral'
import BannerBlue from '../../components/home-content/banners/colored-banners/BannerBlue'
import BannerOrange from '../../components/home-content/banners/colored-banners/BannerOrange'
import NewsBanner from '../../components/home-content/banners/news/NewsBanner'
import BannerPromo from '../../components/home-content/banners/promo-banners/BannerPromo'
import BestSeason from '../../components/home-content/cards/BestSeason'
import Recently from '../../components/home-content/cards/Recently'
import { LazyLoadComponent } from 'react-lazy-load-image-component'


const Home = () => {
    disableKeyboardScroll()
    return (
        <div className="home-content-wrapper home">
            <CarouselGeneral />

            <div className="dynamic-wrapper">
                <Recently />
                <BannerOrange />
                <Recently />
                <BestSeason />
                <LazyLoadComponent>
                    <NewsBanner />
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <BestSeason />
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <BannerPromo />
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <BestSeason />
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <BestSeason />
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <BannerBlue />
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <BestSeason />
                </LazyLoadComponent>


            </div>
            <div className="view-all__wrapper">
                <ViewAll />
            </div>
        </div>
    )
}

export default Home