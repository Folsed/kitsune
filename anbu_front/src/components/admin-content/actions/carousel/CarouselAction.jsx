import React, { useContext } from 'react'
import AnimeTables from '../anime/tables/AnimeTables'
import CarouselForm from './forms/CarouselForm'
import AdminContext from '../../../../providers/AdminProvider'


const CarouselAction = () => {
    const { action } = useContext(AdminContext)

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