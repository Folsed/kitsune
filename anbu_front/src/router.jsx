import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import Home from "./pages/home-page/HomePage";
import AnimePage from "./pages/anime-page/AnimePage";
import BrowsePage from "./pages/browse-page/BrowsePage";
import { NotFound } from "./pages/not-found/NotFound";
import { ROUTES } from "./router/routes";
import PageLoader from "./UI/loader/PageLoader";

const LazyAccount = React.lazy(() => import("./pages/account-page/AccountPage"))
// const LazyBrowse = React.lazy(() => import("./pages/browse-page/BrowsePage"))
const LazyAdmin = React.lazy(() => import("./pages/admin-page/AdminPage"))



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
                element: <AnimePage />
            },
            {
                path: ROUTES.account,
                element:
                    <React.Suspense fallback={<PageLoader />}>
                        <LazyAccount />
                    </React.Suspense>
            },
            {
                path: ROUTES.anime,
                element: <BrowsePage />
            },
            {
                path: ROUTES.animeByGenre(),
                element: <BrowsePage />

            },
            {
                path: ROUTES.searchedAnimes(),
                element: 'searched animes'
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
                element:
                    <React.Suspense fallback={<PageLoader />}>
                        <LazyAdmin />
                    </React.Suspense>
            },
        ]
    },

])

export default router