import skeleton from './../skeleton-animation.module.css'
import styles from './desc-skeleton.module.css'

import React from 'react'

const DescriptionSkeleton = () => {
    return (
        <div className={styles.descWrapper}>
            <div className={styles.desc}>
                <div className={`${styles.descTitle} ${skeleton.loading}`}></div>
                <div className={`${styles.descSub} ${skeleton.loading}`}></div>
                <div className={`${styles.descRating} ${skeleton.loading}`}></div>
                <div className={`${styles.descButton} ${skeleton.loading}`}></div>
                <div className={`${styles.descSynopsisWrapper}`}>
                    <div className={`${styles.descSynopsis} ${skeleton.loading}`}></div>
                    <div className={`${styles.descSynopsis} ${skeleton.loading}`}></div>
                    <div className={`${styles.descSynopsis} ${skeleton.loading}`}></div>
                    <div className={`${styles.descSynopsis} ${skeleton.loading}`}></div>
                </div>
            </div>
            <div className={`${styles.trailerWrapper}`}>
                <div className={`${styles.trailer} ${skeleton.loading}`}></div>
                <div className={`${styles.descButton} ${skeleton.loading}`}></div>
            </div>

        </div>
    )
}

export default DescriptionSkeleton