import './account-page.css'

import { Navigate } from 'react-router-dom'
import { userAuthContext } from '../../providers/AuthProvider'
import { ROUTES } from '../../router/routes'
import UserInfo from '../../components/account-content/user-info/UserInfo'
import AccountNavbar from '../../components/account-content/navbar/AccountNavbar'
import Content from '../../components/account-content/content/Content'

const AccountPage = () => {
    const { userToken } = userAuthContext()
    

    if (!userToken) {
        return <Navigate to={ROUTES.home} replace={true} />
    }

    return (
        <div className='account-page__wrapper'>
            <div className="account-page__grid">
                <UserInfo />
                <AccountNavbar />
                <Content />
            </div>
        </div>
    )
}

export default AccountPage