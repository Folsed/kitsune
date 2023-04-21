import { useState } from 'react'
import AdminFormInput from '../../../../../../UI/inputs/AdminFormInput'
import AdminFormTextarea from '../../../../../../UI/inputs/AdminFormTextarea'
import styles from './../forms.module.css'
import ImageUploader from '../../../../../../UI/inputs/ImageUploader'
import { BlackButton } from '../../../../../../UI/buttons/BlackButton'
import { ReactComponent as ActiveCheckIcon } from './../../../../../../assets/icons/dot.svg'

const AddAnime = () => {
    const [uaTitle, setUaTitle] = useState('')
    const [enTitle, setEnTitle] = useState('')
    const [aired, setAired] = useState()
    const [country, setCountry] = useState('')
    const [episodes, setEpisodes] = useState()
    const [totalEpisodes, setTotalEpisodes] = useState()
    const [director, setDirector] = useState()
    const [studio, setStudio] = useState()
    const [translated, setTranslated] = useState()
    const [duration, setDuration] = useState()
    const [genres, setGenres] = useState()
    const [trailer, setTrailer] = useState()
    const [synopsis, setSynopsis] = useState()
    const [activeCheck, setActiveCheck] = useState(1)

    return (
        <form action="" noValidate>
            <div className={styles.formContainer}>
                <div className={styles.inputsBox}>
                    <AdminFormInput
                        type='text'
                        name='ua_title'
                        id='ua_title'
                        placeholder='Ukrainian title'
                        value={uaTitle}
                        onChange={(e) => setUaTitle(e.target.value)}

                    />
                    <AdminFormInput
                        type='text'
                        name='en_title'
                        id='en_title'
                        placeholder='English title'
                        value={enTitle}
                        onChange={(e) => setEnTitle(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='aired'
                        id='aired'
                        placeholder='Aired'
                        value={aired}
                        onChange={(e) => setAired(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='country'
                        id='country'
                        placeholder='Country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='episodes'
                        id='episodes'
                        placeholder='Episodes'
                        value={episodes}
                        onChange={(e) => setEpisodes(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='total_episodes'
                        id='total_episodes'
                        placeholder='Total Episodes'
                        value={totalEpisodes}
                        onChange={(e) => setTotalEpisodes(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='director'
                        id='director'
                        placeholder='Director'
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='studio'
                        id='studio'
                        placeholder='Studio'
                        value={studio}
                        onChange={(e) => setStudio(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='translated'
                        id='translated'
                        placeholder='Translated'
                        value={translated}
                        onChange={(e) => setTranslated(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='duration'
                        id='duration'
                        placeholder='Duration'
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='genres'
                        id='genres'
                        placeholder='Genres'
                        value={uaTitle}
                        onChange={(e) => setUaTitle(e.target.value)}
                    />
                    <AdminFormInput
                        type='text'
                        name='trailer'
                        id='trailer'
                        placeholder='Trailer Link'
                        value={uaTitle}
                        onChange={(e) => setUaTitle(e.target.value)}
                    />
                    <AdminFormTextarea
                        type='text'
                        name='synopsis'
                        id='synopsis'
                        placeholder='Synopsis'
                        className={styles.textarea}
                    />
                    <div className={styles.actionBtns}>
                        <div className={styles.activeCheck}>
                            <ActiveCheckIcon
                                fill={activeCheck === 1 ? 'var(--main-color)' : '#252525'}
                                onClick={() => { setActiveCheck(activeCheck === 1 ? 0 : 1) }}
                            />
                            <span>{activeCheck === 1 ? 'Active' : 'Inactive'}</span>
                        </div>
                        <BlackButton title={`Submit`} className={styles.submitBtn} type='submit' />
                    </div>
                </div>
                <div className={styles.imagesBox}>
                    <ImageUploader
                        placeholder={'Upload Preview'}
                        className={styles.previewImage}
                    />
                    <ImageUploader
                        placeholder={'Upload Sub-Preview'}
                        className={styles.subPreviewImage}
                    />
                    <ImageUploader
                        placeholder={'Upload Logo'}
                        className={styles.logoImage}
                    />
                </div>


            </div>
        </form>
    )
}

export default AddAnime