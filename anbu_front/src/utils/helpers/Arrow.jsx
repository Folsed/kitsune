// import {arrow} from './../img/welcome-carousel/arrow.svg'

export const Arrow = ({ ...props }) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            <svg className="svgArrowIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d='M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z'/>
            </svg>
        </button>

    )
}
