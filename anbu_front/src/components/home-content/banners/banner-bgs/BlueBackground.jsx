import './bgs.style.css'
import styles from './banner-background.module.css'

export const BlueBackground = () => {
    return (
        <div className={styles.blueBg}>
            {/* Bg1 */}
            <svg className={styles.blueBgPieceOne} viewBox="100 -769 2822 1681" aria-hidden="true" role="img">
                <linearGradient id="blue-banner-p1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="62%" stopColor="#aeedee00"></stop>
                    <stop offset="100%" stopColor="#94d5e9"></stop></linearGradient>
                <path d="M 4 97 A 1 1 0 0 0 280 577 A 1 1 0 0 0 4 97" transform='rotate(-85)' fill="url(#blue-banner-p1)">
                </path>
            </svg>
            <svg className={styles.blueBgPieceOne} viewBox="-645 52 2822 1681" aria-hidden="true" role="img">
                <linearGradient id="blue-banner-p2" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="30%" stopColor="#aeedee00"></stop>
                    <stop offset="100%" stopColor="#94d5e9"></stop></linearGradient>
                <path d="M 4 97 A 1 1 0 0 0 303 400 A 1 1 0 0 0 4 97" transform='rotate(60)' fill="url(#blue-banner-p2)">
                </path>
            </svg>



            <svg className={styles.blueBgPieceTwo} viewBox="-400 0 2822 1680" aria-hidden="true" role="img">
                <linearGradient id="banner-bg1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#eb0000"></stop>
                    <stop offset="1" stopColor="#95ff0076"></stop></linearGradient>
                <path d="M 4 97 A 1 1 0 0 0 303 400 A 1 1 0 0 0 4 97" transform='rotate(60)' fill="url(#blue-banner-p2)">
                </path>
            </svg>

            

            <svg className={styles.blueBgPieceTwo} viewBox="-885 78 2822 1680" aria-hidden="true" role="img">
                <linearGradient id="blue-banner-bubble-p3" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="45%" stopColor="#6ec0da"></stop>
                    <stop offset="100%" stopColor="#b6bde300"></stop></linearGradient>
                <path d="M 494 243 A 1 1 0 0 0 128 -96 A 1 1 0 0 0 494 243" transform='rotate(75)' fill="url(#blue-banner-bubble-p3)">
                </path>
            </svg>






            <svg className={styles.blueBgPieceTwo} viewBox="-400 0 2822 1680" aria-hidden="true" role="img">
                <linearGradient id="banner-bg1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#eb0000"></stop>
                    <stop offset="1" stopColor="#95ff0076"></stop></linearGradient>

                <g strokeWidth='2' fill="none">
                    <path stroke="url(#blue-banner-p1)" opacity=".8" d="M 473 187 L 178 632 M 503 522 L 712 187 M 474 355 L 810 -168 M 177 481 L 624 -185 M 46 1134 L 534 362"></path>
                </g>
            </svg>
        </div>

    );
}