import { useState } from 'react'
import styles from './review.module.css'
import { RiStarLine, RiStarHalfFill, RiStarFill } from 'react-icons/ri'

const Stars = ({ stars, size, isUsable, infoEnabled, rate, setRate, haveUser }) => {
    const [hoverRate, setHoverRate] = useState(undefined)
    const [reviewActive, setReviewActive] = useState(false)

    const handleClick = (value) => {
        setRate(value)
    }

    const handleMouseOver = (value) => {
        setHoverRate(value)
    }

    const handleMouseLeave = () => {
        setHoverRate(undefined)
    }

    const unusableRating = Array.from({ length: 5 }, (e, index) => {
        const roundedStars = Math.round(stars * 2) / 2
        let number = index + 0.5

        return (
            <span key={index}>
                {roundedStars >= index + 1 ? (
                    <RiStarFill size={size} />
                ) : roundedStars >= number ? (
                    <RiStarHalfFill size={size} />
                ) : (
                    <RiStarLine size={size} />
                )}
            </span>
        )
    })

    const usableRating = Array.from({ length: 5 }, (e, index) => {
        return (
            <span key={index}>
                {(!rate && !reviewActive) ?
                    <RiStarLine size={size} />
                    :
                    <>
                        {(hoverRate || rate) > index ?
                            <RiStarFill
                                size={size}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    color: 'var(--main-color)'
                                }}
                            />
                            :
                            <RiStarLine
                                size={size}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    color: reviewActive ? 'var(--main-color)' : '#dadada'
                                }}
                            />
                        }
                    </>
                }
            </span>
        )
    })

    return (
        <>
            {isUsable ?
                <div className={styles.myReview}>
                    <div
                        className={styles.stars}
                        onMouseOver={() => setReviewActive(true)}
                        onMouseLeave={() => setReviewActive(false)}
                    >
                        {usableRating}
                    </div>
                    {infoEnabled && rate ?
                        <span>
                            Ви поставили {rate} {rate < 2 ? 'зірку' : rate >= 2 && rate <= 4 ? 'зірки' : 'зірок'}
                        </span>
                        : ''
                    }
                </div>
                :
                <div className={styles.myReview} style={{pointerEvents: 'none'}}>
                    <div
                        onMouseOver={() => setReviewActive(true)}
                        onMouseLeave={() => setReviewActive(false)}
                        className={styles.stars}
                        style={{color: haveUser ? 'var(--main-color)' : ''}}
                    >
                        {unusableRating}
                    </div>
                </div>

            }
        </>
    )
}

export default Stars
