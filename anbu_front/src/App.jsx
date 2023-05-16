import './index.css'


import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { AuthProvider } from './providers/AuthProvider'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()


function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
