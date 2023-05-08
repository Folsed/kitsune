import styles from './footer.module.css'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.sectionInfo}>
                        <div className={styles.shalf}></div>
                        <div className={styles.copyr}>
                            <span>Copyright©Folsed's</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer