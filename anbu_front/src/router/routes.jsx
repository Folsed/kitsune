export const ROUTES = {
    home: '/',
    animePage: (animeId = null, animeAlias = null) => (animeId ? `/anime/series/${animeId}/${animeAlias}` : `anime/series/:animeId/:animeAlias`),
    account: '/account',
    anime: '/animes',
    animeByGenre: (genre = null) => (genre ? `/animes/genre/${genre}` : `/animes/genre/:genre`),

    login: '/login',
    registration: 'registration',
}