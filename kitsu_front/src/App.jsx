import './index.css'


import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { AuthProvider } from './providers/AuthProvider'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react'
import AuthModalContext from './providers/AuthModalProvider'
import AccountContext from './providers/AccountProvider'


const queryClient = new QueryClient()


function App() {
    const [active, setActive] = useState(false)
    const [toggleClass, setToggleClass] = useState('')
    const [activeTab, setActiveTab] = useState(0)

    return (
        <QueryClientProvider client={queryClient}>
            <AuthModalContext.Provider value={{ active, setActive, toggleClass, setToggleClass }}>
                <AccountContext.Provider value={{ activeTab, setActiveTab }}>
                    <AuthProvider>
                        <RouterProvider router={router} />
                    </AuthProvider>
                </AccountContext.Provider>
            </AuthModalContext.Provider>
        </QueryClientProvider>
    )
}

export default App
