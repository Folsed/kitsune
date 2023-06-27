export const ROUTES = {
    // Basic routes
    home: '/',
    animePage: (animeId = null, animeAlias = null) => (animeId ? `/anime/series/${animeId}/${animeAlias}` : `anime/series/:animeId/:animeAlias`),
    account: '/account',
    anime: '/animes',
    animeByGenre: (genre = null) => (genre ? `/animes/genre/${genre}` : `/animes/genre/:genre`),
    // searchedAnimes: (searchParam = null) => (searchParam ? `/anime/search/${searchParam}` : `/anime/search/:searchParam`),
    animeSearch: '/search',
    // Auth routes
    login: '/login',
    registration: 'registration',

    // Administrator routes
    adminPanel: '/administrator'
}