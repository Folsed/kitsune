import './home-page.css'
import disableKeyboardScroll from '../../helpers/disabledKeyboardScroll'

// Components 
import { ViewAll } from '../../components/view-all/ViewAll'
import CarouselGeneral from '../../components/carousel/CarouselGeneral'
import BannerBlue from '../../components/home-content/banners/colored-banners/BannerBlue'
import BannerOrange from '../../components/home-content/banners/colored-banners/BannerOrange'
import NewsBanner from '../../components/home-content/banners/news/NewsBanner'
import BannerPromo from '../../components/home-content/banners/promo-banners/BannerPromo'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import CardsTrack from '../../components/home-content/cards/CardsTrack'

/* 
Cards shalf colors:
    var(--cards-shalf-color-green)
    var(--cards-shalf-color-orange)
    var(--cards-shalf-color-white-black)
    var(--cards-shalf-color-blue)
    or any others...
*/


const Home = () => {
    disableKeyboardScroll()
    return (
        <div className="home-content-wrapper home">
            <CarouselGeneral />

            <div className="dynamic-wrapper">
                <CardsTrack
                    query={'recently'}
                    title={'Новинки'}
                    subTitle={'Нещодавно додані аніме на сайті'}
                    shalfColor={'var(--cards-shalf-color-white-black)'}
                />
                <CardsTrack
                    query={'best'}
                    title={'Найкраще'}
                    subTitle={'Дивіться найкраще аніме на думку користувачів'}
                    shalfColor={'var(--cards-shalf-color-orange)'}
                />
                <BannerPromo />
                <CardsTrack
                    query={'popular'}
                    title={'Найпопулярніші'}
                    subTitle={'Більше всього відгуків тут'}
                    shalfColor={'var(--cards-shalf-color-blue)'}
                />
                <LazyLoadComponent>
                    <BannerBlue />
                    <CardsTrack
                        genre={'adventure'}
                        title={'Цікаві пригоди'}
                        subTitle={'Всі люблять пригоди, чи не так?'}
                        shalfColor={'var(--cards-shalf-color-white-black)'}
                    />
                    <CardsTrack
                        genre={'fantasy'}
                        title={'Фантазійне фентезі'}
                        subTitle={'Дракони, вампіри, середньовіччя...Чудеса'}
                        shalfColor={'var(--cards-shalf-color-orange)'}
                    />
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <NewsBanner />
                    <CardsTrack
                        genre={'romance'}
                        title={'Солодка любов'}
                        subTitle={'Щось...'}
                        shalfColor={'var(--cards-shalf-color-blue)'}
                    />
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <BannerOrange />
                    <BannerPromo />
                    <CardsTrack
                        genre={'shounen'}
                        title={'Кінець сторінки'}
                        shalfColor={'var(--cards-shalf-color-white-black)'}
                    />
                </LazyLoadComponent>
            </div>
            <LazyLoadComponent>
                <div className="view-all__wrapper">
                    <ViewAll />
                </div>
            </LazyLoadComponent>
        </div>
    )
}

export default Home