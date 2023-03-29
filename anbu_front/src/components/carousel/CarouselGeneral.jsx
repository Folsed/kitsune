import CarouselLogic from "./CarouselLogic"
import { CarouselSlide } from "./CarouselSlide"


import welcome1 from "./../../img/welcome-carousel/welcome1.webp";
import welcome2 from "./../../img/welcome-carousel/welcome2.webp";
import welcome3 from "./../../img/welcome-carousel/welcome3.webp";
import welcome4 from "./../../img/welcome-carousel/welcome4.webp";
import welcome5 from "./../../img/welcome-carousel/welcome5.webp";
import welcome6 from "./../../img/welcome-carousel/welcome6.webp";
import { Background1 } from "./backgrounds/Background1";
import { Background2 } from "./backgrounds/Background2";
import { Background3 } from "./backgrounds/Background3";

const carouselData = [
    { id: 1001, img: welcome1, background: <Background1 /> },
    { id: 1002, img: welcome2, background: <Background2 /> },
    { id: 1003, img: welcome3, background: <Background3 /> },
    { id: 1004, img: welcome4, background: <Background2 /> },
    { id: 1005, img: welcome5, background: <Background1 /> },
    { id: 1006, img: welcome6, background: <Background2 /> },

]

const CarouselGeneral = () => {
    return (
        <div>
            {/* <CarouselLogic>
                <CarouselSlide title='Slide1'><img src={welcome1} alt="" /></CarouselSlide>
                <CarouselSlide title='Slide2'><img src={welcome2} alt="" /></CarouselSlide>
                <CarouselSlide title='Slide3'><img src={welcome3} alt="" /></CarouselSlide>
                <CarouselSlide title='Slide1'><img src={welcome4} alt="" /></CarouselSlide>
                <CarouselSlide title='Slide2'><img src={welcome5} alt="" /></CarouselSlide>
                <CarouselSlide title='Slide3'><img src={welcome6} alt="" /></CarouselSlide>
            </CarouselLogic> */}
            <CarouselLogic>
                {carouselData.map((item, index) => (
                    <CarouselSlide key={item.id} index={index}><img src={item.img} alt="" /></CarouselSlide>
                ))}
            </CarouselLogic>
        </div>
    )
}

export default CarouselGeneral