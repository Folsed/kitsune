import CarouselLogic from "./CarouselLogic"
import CarouselSlide from "./CarouselSlide"
import { useCarousel } from "../../hooks/useCarousel"
import CarouselSkeleton from "../skeletons/welcome-carousel-skeleton/CarouselSkeleton"
import { useState } from "react";

const CarouselGeneral = () => {
    const { isLoading, isError, data: slides } = useCarousel()
    const [imageLoaded, setImageLoaded] = useState(false)


    console.log(imageLoaded)
    return (
        <div>
            {isLoading ? <CarouselSkeleton /> :
                <CarouselLogic slides={slides.carousel}>
                    {slides.carousel.map((item) => (
                        <CarouselSlide key={item.id} animeId={item.anime_id} alias={item.alias}>
                            <picture>
                                <img
                                    
                                    loading="lazy"
                                    src={`http://127.0.0.1:8000/${item.content_path}`}
                                    alt=""
                                    title={item.title}
                                    onLoad={() => setImageLoaded(true)}
                                />
                            </picture>
                        </CarouselSlide>
                    ))}
                </CarouselLogic>
            }
        </div>
    )
}

export default CarouselGeneral;