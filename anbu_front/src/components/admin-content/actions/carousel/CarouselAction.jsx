import React, { useContext } from 'react'
import AnimeContext from '../../../../providers/AnimeProvider'
import AnimeForms from '../anime/forms/AnimeForms'
import AnimeTables from '../anime/tables/AnimeTables'
import CarouselForm from './forms/CarouselForm'


const CarouselAction = () => {
    const { action } = useContext(AnimeContext)

    return (
        <>
            {action === 'carousel-tables' ? <AnimeTables />
                :
                action === 'carousel-forms' ? <CarouselForm />
                    :
                    ''
            }
        </>
    )
}

export default CarouselAction