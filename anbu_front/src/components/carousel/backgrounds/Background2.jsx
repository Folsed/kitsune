import './backgrounds.css'

export const Background2 = ({ currentIndex }) => {
    return (
        <div className={`carousel-background__2 ${currentIndex === 1 || currentIndex === 3 || currentIndex === 5 ? 'active__background' : ''}`}>
            {/* Bg2 */}
            <svg className="single-promo-background2-p1" viewBox="0 0 100 100" aria-hidden="true" role="img">
                <linearGradient id="bg2" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#46464633"></stop>
                    <stop offset="1" stopColor="#2abdbb"></stop></linearGradient>
                <path d="M 0 0 L 32.725 0 C 46.2 35.35 36.925 74.7833 0.875 121.975 C 26.075 74.725 28.35 28.175 0 0" fill="url(#bg2)">
                </path>
            </svg>

            <svg className="single-promo-background2-p1" viewBox="0 0 100 100" aria-hidden="true" role="img">
                <linearGradient id="bg2" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#46464633"></stop>
                    <stop offset="1" stopColor="#2abdbb"></stop></linearGradient>
                <path d="M 0 0 M 74.2 137.9 C 59.4417 87.6167 33.775 71.05 2.8 44.275 C 46.375 64.925 79.5083 88.2 114.275 139.125" fill="url(#bg2)">
                </path>
            </svg>

            <svg className="single-promo-background2-p2" viewBox="0 0 100 100" aria-hidden="true" role="img">
                <linearGradient id="bg2" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#46464633"></stop>
                    <stop offset="1" stopColor="#2abdbb"></stop>
                </linearGradient>
                <path d="M 0 0 M 74.2 137.9 C 59.4417 87.6167 33.775 71.05 2.8 44.275 C 46.375 64.925 79.5083 88.2 114.275 139.125" fill="url(#bg2)">
                </path>
            </svg>

            <svg className="single-promo-background2-p3" viewBox="50 0 109 111" aria-hidden="true" role="img">
                <linearGradient id="bg2" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#46464633"></stop>
                    <stop offset="1" stopColor="#2abdbb"></stop>
                </linearGradient>
                <path d="M 0 0 L 32.725 0 C 27 27 36.925 74.7833 74 110 C 26.075 74.725 2 44 0 0" fill="url(#bg2)">
                </path>
            </svg>
        </div>
    );
}
