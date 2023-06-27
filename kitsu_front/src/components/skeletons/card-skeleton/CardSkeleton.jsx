import './card-skeleton.css'
import skeleton from './../skeleton-animation.module.css'

const CardSkeleton = () => {
    return (
        <>
            <div className="card">
                <div className={`image ${skeleton.loading}`}>
                </div>
                <div className="content">
                    <h4 className={`title ${skeleton.loading}`}></h4>
                    <div className={`description ${skeleton.loading}`}></div>
                </div>
            </div>
        </>

    )
}

export default CardSkeleton