import React, { useContext } from 'react'
import AccountContext from '../../../providers/AccountProvider'
import Statistic from './statistic/Statistic'
import Revise from './revise/Revise'
import Watchlist from './watchlist/Watchlist'
import Reviews from './reviews/Reviews'

const activeContent = [
    { component: <Statistic /> },
    { component: <Revise /> },
    { component: <Watchlist /> },
    { component: <Reviews /> },
]


const Content = () => {
    const { activeTab, setActiveTab } = useContext(AccountContext)

    return (
        <>
            {
                activeContent.map((item, index) =>
                    activeTab === index && <div key={index}>{item.component}</div>
                )
            }
        </>
    )
}

export default Content