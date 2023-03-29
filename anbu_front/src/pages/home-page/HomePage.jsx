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


const Home = () => {
    disableKeyboardScroll()
    return (
        <div className="home-content-wrapper home">
            <CarouselGeneral />
            
            <div className="dynamic-wrapper">
                <Recently/>
                <BannerOrange />
                <Recently />
                <BestSeason />
                <NewsBanner />
                <BestSeason />
                <BannerPromo/>
                <BestSeason />
                <BestSeason />
                <BannerBlue />
                <BestSeason />
            </div>
            <div className="view-all__wrapper">
                <ViewAll/>
            </div>
        </div>
    )
}

export default Home