import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import AccountPage from "./pages/account-page/AccountPage";
import Anime from "./pages/anime-page/AnimePage";
import RegisterPage from "./pages/auth/RegisterPage";
import Home from "./pages/home-page/HomePage";
import { NotFound } from "./pages/not-found/NotFound";
import { ROUTES } from "./router/routes";


const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <DefaultLayout />,
        errorElement: <NotFound />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: ROUTES.animePage(),
                element: <Anime />
            },
            {
                path: ROUTES.account,
                element: <AccountPage/>
            },
            {
                path: ROUTES.login,
                element: <p>LoginPage</p>
            },
            {
                path: ROUTES.register,
                element: <RegisterPage/>
            },

        ]
    },

])

export default router