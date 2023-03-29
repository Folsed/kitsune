import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Anime from "./pages/anime-page/AnimePage";
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
        ]
    },

])

export default router