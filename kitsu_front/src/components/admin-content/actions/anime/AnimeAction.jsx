import React, { useContext } from 'react'
import AnimeTables from './tables/AnimeTables'
import AnimeForms from './forms/AnimeForms'
import AdminContext from '../../../../providers/AdminProvider'

const AnimeAction = () => {
    const { action } = useContext(AdminContext)

    return (
        <>
            {action === 'anime-tables' ? <AnimeTables />
                :
                action === 'anime-forms' ? <AnimeForms />
                    :
                    ''
            }
        </>
    )
}

export default AnimeAction