import CarouselLogic from "./CarouselLogic"
import CarouselSlide from "./CarouselSlide"
import { useCarousel } from "../../hooks/anime/useCarousel"
import CarouselSkeleton from "../skeletons/welcome-carousel-skeleton/CarouselSkeleton"
import { useEffect, useState } from "react";

const CarouselGeneral = () => {
    const ROOT_URL = import.meta.env.VITE_ROOT_URL
    const { isLoading, isError, data: slides } = useCarousel()

    return (
        <div>
            {isLoading ? <CarouselSkeleton /> :
                <CarouselLogic slides={slides.carousel}>
                    {slides.carousel.map((item) => (
                        <CarouselSlide key={item.id} animeId={item.anime_id} alias={item.alias}>
                            <picture>
                                <img
                                    src={`${ROOT_URL}${item.content_path}`}
                                    alt=""
                                    title={item.title}
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