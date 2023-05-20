import styles from "../../forms.module.css";
import AddAnime from './add/AddAnime'
import UploadSeries from './series/UploadSeries'

const AnimeForms = () => {
    return (
        <div className={styles.formsContainer}>

            <AddAnime />
            <UploadSeries />
        </div>
    )
}

export default AnimeForms