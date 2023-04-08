import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import AccountPage from "./pages/account-page/AccountPage";
import Anime from "./pages/anime-page/AnimePage";
import Home from "./pages/home-page/HomePage";
import { NotFound } from "./pages/not-found/NotFound";
import { ROUTES } from "./router/routes";
import BrowsePage from "./pages/browse-page/BrowsePage";


const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <DefaultLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
                // loader
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
                path: ROUTES.anime,
                element: <BrowsePage/>
            },

        ]
    },

])

export default router