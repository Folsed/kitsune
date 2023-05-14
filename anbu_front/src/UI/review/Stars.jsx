import { useState } from 'react'
import styles from './review.module.css'
import { RiStarLine, RiStarHalfFill, RiStarFill } from 'react-icons/ri'

const Stars = ({ stars, size }) => {
    const [rate, setRate] = useState(null)
    console.log(rate)

    const rating = Array.from({ length: 5 }, (e, index) => {
        const roundedStars = Math.round(stars * 2) / 2
        let number = index + 0.5

        return (
            <span key={index}>
                {roundedStars >= index + 1 ? (
                    <RiStarFill
                        size={size}
                        onClick={() => setRate(index + 1)}
                    />
                ) : roundedStars >= number ? (
                    <RiStarHalfFill size={size} />
                ) : (
                    <RiStarLine size={size} />
                )}
            </span>
        )
    })

    return (
        <div className={styles.stars}>{rating}</div>
    )
}

export default Stars