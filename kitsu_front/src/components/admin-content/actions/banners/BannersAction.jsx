import React, { useContext } from 'react'
import BannerForm from './forms/BannerForm'
import AdminContext from '../../../../providers/AdminProvider'


const BannersAction = () => {
    const { action } = useContext(AdminContext)

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