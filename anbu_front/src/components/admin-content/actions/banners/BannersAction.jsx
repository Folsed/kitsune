import React, { useContext } from 'react'
import AnimeContext from '../../../../providers/AnimeProvider'
import BannerForm from './forms/BannerForm'


const BannersAction = () => {
    const { action } = useContext(AnimeContext)

    return (
        <>
            {action === 'banners-tables' ? 'banners'
                :
                action === 'banners-forms' ? <BannerForm />
                    :
                    ''
            }
        </>
    )
}

export default BannersAction