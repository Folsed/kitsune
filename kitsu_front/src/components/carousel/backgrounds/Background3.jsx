import './backgrounds.css'

export const Background3 = ({ currentIndex }) => {
    return (
        <div className={`carousel-background__bubbles animation ${currentIndex === 2 ? 'active__background' : ''}`}>
            {/* Bg3 */}
            <svg className="single-promo-background3-p1" viewBox="0 0 2709 1680" aria-hidden="true" role="img">
                <defs>

                    <linearGradient x1="50%" y1="54.35%" x2="50%" y2="98.226%" id="hero-carousel-yellow-left-a">
                        <stop stopColor="#FFC94D" offset="0%"></stop>
                        <stop stopColor="#FAB818" stopOpacity="0" offset="100%"></stop>
                    </linearGradient>

                    <linearGradient x1="50%" y1="54.35%" x2="50%" y2="98.226%" id="hero-carousel-yellow-left-b">
                        <stop stopColor="#FFC94D" offset="0%"></stop>
                        <stop stopColor="#FAB818" stopOpacity="0" offset="100%"></stop>
                    </linearGradient>

                    <linearGradient x1="-5.282%" y1="0%" x2="28.057%" y2="50%" id="hero-carousel-yellow-left-c">
                        <stop stopColor="#FFD980" offset="0%"></stop>
                        <stop stopColor="#FFC94D" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="-5.282%" y1="0%" x2="28.057%" y2="50%" id="hero-carousel-yellow-left-d">
                        <stop stopColor="#FFD980" offset="0%"></stop>
                        <stop stopColor="#ffca4da5" offset="100%"></stop>
                    </linearGradient>
                </defs>

                <g strokeWidth='2' fill="none">
                    <path stroke="url(#hero-carousel-yellow-left-a)" opacity=".7" d="M 527 -149 L -102 1492" transform="translate(100 219)"></path>
                    <path stroke="url(#hero-carousel-yellow-left-b)" opacity=".7" d="M -216 -276 L 1049 1619" transform="translate(267 119) rotate(10)"></path>
                    <path stroke="url(#hero-carousel-yellow-left-c)" opacity=".7" d="M -15 1027 L 1467 437" transform="translate(-400 -204) rotate(-10)"></path>
                    <path stroke="url(#hero-carousel-yellow-left-a)" opacity=".7" d="M 527 -149 L -102 1492" transform="translate(100 219)"></path>

                    <path stroke="url(#carousel-yellow-right-a)" opacity=".7" d="M -216 -276 L 1049 1619" transform="translate(267 119) rotate(10)"></path>
                    <path stroke="url(#hero-carousel-yellow-right-b)" opacity=".7" d="M -216 -276 L 1049 1619" transform="translate(267 119) rotate(10)"></path>

                </g>
            </svg>

            <svg className="single-promo-background3-p2" viewBox="0 0 2709 1680" aria-hidden="true" role="img">
                <linearGradient id="bg3_right_bubbles" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#ffffff32"></stop>
                    <stop offset="1" stopColor="#ffffff0f"></stop></linearGradient>
                <path fill="url(#bg3_right_bubbles)" opacity="1" d="M -230 240 A 1 1 0 0 0 852 1023 A 1 1 0 0 0 -230 238" transform="translate(-400 -100)"></path>
            </svg>

            <svg className="single-promo-background3-p3" viewBox="0 0 2709 1680" aria-hidden="true" role="img">
                <linearGradient id="bg3_left_bubbles_b1" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#ffffff32"></stop>
                    <stop offset="1" stopColor="#ffffff07"></stop>
                </linearGradient>
                <path fill="url(#bg3_left_bubbles_b1)" opacity="1" d="M -230 240 A 1 1 0 0 0 852 1023 A 1 1 0 0 0 -230 238" transform="translate(2798 -200) rotate(20)"></path>
                <linearGradient id="bg3_left_bubbles_b2" gradientUnits="userSpaceOnUse" x1="65.42" x2="315.72" y1="7.12" y2="233.33">
                    <stop offset="0" stopColor="#ffffff13"></stop>
                    <stop offset="1" stopColor="#ffffff07"></stop>
                </linearGradient>
                <path fill="url(#bg3_left_bubbles_b2)" opacity="1" d="M 970 1439 A 1 1 0 0 0 -274 -174 A 1 1 0 0 0 970 1439" transform="translate(2631 853)"></path>


                <defs>
                    <linearGradient x1="-5.282%" y1="0%" x2="28.057%" y2="50%" id="hero-carousel-yellow-right-a">
                        <stop stopColor="#FFD980" offset="0%"></stop>
                        <stop stopColor="#FFC94D" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="-5.282%" y1="0%" x2="28.057%" y2="50%" id="hero-carousel-yellow-right-b">
                        <stop stopColor="#FFD980" offset="0%"></stop>
                        <stop stopColor="#ffca4da5" offset="100%"></stop>
                    </linearGradient>
                </defs>


                <g strokeWidth='2' fill="none">
                    <path stroke="url(#hero-carousel-yellow-right-a)" opacity=".8" d="M 527 -149 L -102 1492" transform="translate(2131 -5)"></path>

                    <path stroke="url(#hero-carousel-yellow-right-b)" opacity="1" d="M -216 -276 L 1049 1619" transform="translate(2431 632) rotate(10)"></path>
                </g>
            </svg>
        </div>
    );
}
