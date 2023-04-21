import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import AccountPage from "./pages/account-page/AccountPage";
import Anime from "./pages/anime-page/AnimePage";
import Home from "./pages/home-page/HomePage";
import { NotFound } from "./pages/not-found/NotFound";
import { ROUTES } from "./router/routes";
import BrowsePage from "./pages/browse-page/BrowsePage";
import AdminPage from "./pages/admin-page/AdminPage";


const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <DefaultLayout />,
        children: [
            // Basic routes
            {
                index: true,
                element: <Home />,
            },
            {
                path: ROUTES.animePage(),
                element: <Anime />
            },
            {
                path: ROUTES.account,
                element: <AccountPage />
            },
            {
                path: ROUTES.anime,
                element: <BrowsePage />
            },
            {
                path: ROUTES.animeByGenre(),
                element: <BrowsePage />
            },
            // Errors
            {
                path: '*',
                element: <NotFound />,
            }

        ]
    },
    // Admin routes
    {
        element: <AdminLayout />,
        children: [
            {
                path: ROUTES.adminPanel,
                element: <AdminPage />
            },
        ]
    },

])

export default router