import React, { useContext } from 'react'
import AnimeContext from '../../../../providers/AnimeProvider'
import AnimeTables from './tables/AnimeTables'
import AnimeForms from './forms/AnimeForms'

const AnimeAction = () => {
    const { action } = useContext(AnimeContext)

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