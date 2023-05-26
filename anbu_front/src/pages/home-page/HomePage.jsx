import './home-page.css'
import disableKeyboardScroll from '../../helpers/disabledKeyboardScroll'

// Components 
import { ViewAll } from '../../components/view-all/ViewAll'
import CarouselGeneral from '../../components/carousel/CarouselGeneral'
import NewsBanner from '../../components/home-content/banners/news/NewsBanner'
import BannerPromo from '../../components/home-content/banners/promo-banners/BannerPromo'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import CardsTrack from '../../components/home-content/cards/CardsTrack'
import ColoredBanner from '../../components/home-content/banners/colored-banners/ColoredBanner'

/* 
Cards shalf colors:
    var(--cards-shalf-color-green)
    var(--cards-shalf-color-orange)
    var(--cards-shalf-color-white-black)
    var(--cards-shalf-color-blue)
    or any others...
*/


const Home = () => {
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
                <BannerPromo id={1} />
                <CardsTrack
                    query={'best'}
                    title={'Найкраще'}
                    subTitle={'Дивіться найкраще аніме на думку користувачів'}
                    shalfColor={'var(--cards-shalf-color-orange)'}
                />
                
                <BannerPromo id={3} />
                <CardsTrack
                    query={'popular'}
                    title={'Найпопулярніші'}
                    subTitle={'Більше всього відгуків тут'}
                    shalfColor={'var(--cards-shalf-color-blue)'}
                />
                <LazyLoadComponent>
                    <ColoredBanner id={2} backgroundColor={'blue'} />

                    <CardsTrack
                        genre={'adventure'}
                        title={'Цікаві пригоди'}
                        subTitle={'Всі люблять пригоди, чи не так?'}
                        shalfColor={'var(--cards-shalf-color-white-black)'}
                    />
                    <ColoredBanner id={1} backgroundColor={'orange'} />
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
                    <ColoredBanner id={3} backgroundColor={'orange'} />
                    <BannerPromo id={2} />
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