import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import AccountPage from "./pages/account-page/AccountPage";
import Anime from "./pages/anime-page/AnimePage";
import Home from "./pages/home-page/HomePage";
import { NotFound } from "./pages/not-found/NotFound";
import { ROUTES } from "./router/routes";
import BrowsePage from "./pages/browse-page/BrowsePage";
import AnimesByGenre from "./components/browse-content/animes-by-genre/AnimesByGenre";


const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <DefaultLayout />,
        children: [
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
                element: <AccountPage/>
            },
            {
                path: ROUTES.anime,
                element: <BrowsePage/>
            },
            {
                path: ROUTES.animeByGenre(),
                element: <BrowsePage/>
            },
            {
                path: '*',
                element: <NotFound />,
            }

        ]
    },

])

export default router