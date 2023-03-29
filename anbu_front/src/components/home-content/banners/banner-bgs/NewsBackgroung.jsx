import './bgs.style.css'

export const NewsBackgroung = () => {
    return (
        <div className='banner-news__background'>
            {/* Bg1 */}

            {/* <svg className="banner-news-background-p2" viewBox="0 0 2714 1617.5" aria-hidden="true" role="img">
                <linearGradient id="banner-bg1" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#eb0000"></stop>
                    <stop offset="1" stopColor="#95ff0076"></stop></linearGradient>
                <path d="M -149 600 A 1 1 0 0 0 882 1215 A 1 1 0 0 0 -149 600" transform='rotate(0)' fill="url(#bg1)">
                </path>
            </svg> */}

            <svg className="banner-news-background-p1" viewBox="123 20 2714 1617.5" aria-hidden="true" role="img">
                <linearGradient id="news-bg" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-19)">
                    <stop offset="1%" stopColor="#ff000068"></stop>
                    <stop offset="2%" stopColor="#ff0000b4"></stop>
                    <stop offset="78%" stopColor="#ff770000"></stop>
                    <stop offset="90%" stopColor="#29eb15e6"></stop>
                    <stop offset="95%" stopColor="#ff770000"></stop>
                </linearGradient>


                <path d="M 37 1021 C 1183 1255 2015 661 2130 -9 H 2886 C 2804 1193 912 1694 37 1024 Z " transform='rotate(0)' fill="url(#news-bg)">
                </path>


            </svg>
            {/* M -149 600 A 1 1 0 0 0 500 360 A 1 1 0 0 0 -149 600 */}
            

        </div>
    )
}
