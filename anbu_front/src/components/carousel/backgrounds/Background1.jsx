import './backgrounds.css'

export const Background1 = ({ currentIndex }) => {
    return (
        <div className={`carousel-background__1 ${currentIndex === 0 || currentIndex === 4 ? 'active__background' : ''}`}>
            {/* Bg1 */}
            <svg className="single-promo-background1-p1" viewBox="0 0 340 322" aria-hidden="true" role="img">
                <linearGradient id="bg1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#f47521"></stop>
                    <stop offset="1" stopColor="#fab718"></stop></linearGradient>
                <path d="m124.75 0a940 940 0 00204.91 242 943.91 943.91 0 01-189.06-111.17 948.34 948.34 0 01-140.92-130.83z" fill="url(#bg1)">
                </path>
            </svg>

            <svg className="single-promo-background1-p2" viewBox="0 0 340 322" aria-hidden="true" role="img">
                <linearGradient id="bg1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#f47521"></stop>
                    <stop offset="1" stopColor="#fab718"></stop></linearGradient>
                <path d="m 205 400 a 940 940 180 0 0 -204.91 -242 a 943.91 943.91 180 0 1 189.06 111.17 a 948.34 948.34 180 0 1 140.6 130.83 z" fill="url(#bg1)">
                </path>
            </svg>

            <svg className="single-promo-background1-p3" viewBox="0 0 340 322" aria-hidden="true" role="img">
                <linearGradient id="bg1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#f47521"></stop>
                    <stop offset="1" stopColor="#fab718"></stop></linearGradient>
                <path d="m 205 400 a 940 940 180 0 0 -204.91 -242 a 943.91 943.91 180 0 1 189.06 111.17 a 948.34 948.34 180 0 1 140.6 130.83 z" fill="url(#bg1)">
                </path>
            </svg>

            <svg className="single-promo-background1-p4" viewBox="0 0 340 322" aria-hidden="true" role="img">
                <linearGradient id="bg1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#f47521"></stop>
                    <stop offset="1" stopColor="#fab718"></stop></linearGradient>
                <path d="M 190 -1 C 212 48 199 100 46 204 C 185 166 299 97 311 -1 z" fill="url(#bg1)">
                </path>
            </svg>
        </div>

    );
}