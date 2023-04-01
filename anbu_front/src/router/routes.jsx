export const ROUTES = {
    home: '/',
    animePage: (animeId = null, animeAlias = null) => (animeId ? `anime/${animeId}/${animeAlias}` : `anime/:animeId/:animeAlias`),
    account: '/account',

    login: '/login',
    registration: 'registration',
}