import './account-page.css'

import { Navigate } from 'react-router-dom'
import { userAuthContext } from '../../providers/AuthProvider'
import { ROUTES } from '../../router/routes'
import UserInfo from '../../components/account-content/user-info/UserInfo'

const AccountPage = () => {
    const { currentUser, userToken } = userAuthContext()

    if (!userToken) {
        return <Navigate to={ROUTES.home} replace={true} />
    }

    return (
        <div className='account-page__wrapper'>
            <div className="account-page__grid">
                <UserInfo />
                <div className="two"></div>
                <div className="three">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quia incidunt inventore ratione eveniet natus ab est qui dignissimos doloribus fugiat porro quasi impedit perferendis, cumque optio dolores aliquam ipsam enim. Ullam minus rem, dolore cum veritatis aliquam odit delectus ipsam, reiciendis, aliquid optio eius quis animi. Quibusdam aperiam non reprehenderit, recusandae, excepturi, doloremque unde sunt obcaecati exercitationem ex minus nobis aspernatur reiciendis maxime dolor quo quaerat doloribus optio at fugit quasi! Doloribus facere itaque repudiandae maxime tenetur ea ullam incidunt unde rerum delectus est, molestias autem excepturi perferendis et sit cupiditate, eveniet eligendi debitis blanditiis asperiores minima possimus eaque?</div>
            </div>
        </div>
    )
}

export default AccountPage