import './bgs.style.css'
import styles from './banner-background.module.css'

export const OrangeBackground = ({ currentIndex }) => {
    return (
        <div className={styles.orangeBg}>
            {/* Bg1 */}
            <svg className={styles.orangeBgPieceOne} viewBox="100 0 999 619.5" aria-hidden="true" role="img">
                <linearGradient id="banner-bg1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#eb0000"></stop>
                    <stop offset="1" stopColor="#95ff0076"></stop></linearGradient>
                <path d="M -1 -2 H 232 C 283 151 278.6667 334 113 402 C 201 333.3333 197 120 -1 -2" transform='rotate(-31)' fill="url(#banner-bg1)">
                </path>
            </svg>

            <svg className={styles.orangeBgPieceTwo} viewBox="100 0 999 619.5" aria-hidden="true" role="img">
                <linearGradient id="banner-bg1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#eb0000"></stop>
                    <stop offset="1" stopColor="#95ff0076"></stop></linearGradient>
                <path d="M 87 363 H 234 C 199 258 301 91 422 18 C 159 106 107 247 87 363" transform='' fill="url(#banner-bg1)">
                </path>
            </svg>

        </div>

    );
}