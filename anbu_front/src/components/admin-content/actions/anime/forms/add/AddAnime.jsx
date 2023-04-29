import { useEffect, useState } from 'react'
import AdminFormInput from '../../../../../../UI/inputs/AdminFormInput'
import AdminFormTextarea from '../../../../../../UI/inputs/AdminFormTextarea'
import styles from './../forms.module.css'
import ImageUploader from '../../../../../../UI/inputs/ImageUploader'
import { BlackButton } from '../../../../../../UI/buttons/BlackButton'
import { ReactComponent as ActiveCheckIcon } from './../../../../../../assets/icons/dot.svg'
import SelectInput from '../../../../../../UI/inputs/SelectInput'
import { useGenres } from '../../../../../../hooks/useGenres'
import { useAnimeCreate } from '../../../../../../hooks/admin/useAnimeCreate'
import Preloader from '../../../../../../UI/loader/Preloader'

const AddAnime = () => {
    const { isLoading, isError, data: genresSelect } = useGenres()
    const { animeCreate, errors, status, setStatus } = useAnimeCreate()

    const [uaTitle, setUaTitle] = useState('')
    const [enTitle, setEnTitle] = useState('')
    const [aired, setAired] = useState('')
    const [country, setCountry] = useState('')
    const [episodes, setEpisodes] = useState('')
    const [totalEpisodes, setTotalEpisodes] = useState('')
    const [director, setDirector] = useState('')
    const [studio, setStudio] = useState('')
    const [translated, setTranslated] = useState('')
    const [trailer, setTrailer] = useState('')
    const [genres, setGenres] = useState([])
    const [synopsis, setSynopsis] = useState('')
    const [activeCheck, setActiveCheck] = useState(1)
    const [previewImage, setPreviewImage] = useState(null)
    const [subPreviewImage, setSubPreviewImage] = useState(null)
    const [logoImage, setLogoImage] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('preview', previewImage)
        formData.append('sub_preview', subPreviewImage)
        formData.append('logo', logoImage)
        genres.forEach(genre => formData.append('genres[]', genre.value))

        const payload = {
            ua_title: uaTitle,
            en_title: enTitle,
            aired: aired,
            country: country,
            episodes: episodes,
            total_episodes: totalEpisodes,
            director: director,
            studio: studio,
            translated: translated,
            trailer: trailer,
            synopsis: synopsis,
            active: activeCheck,
        }

        for (const key in payload) {
            if (payload.hasOwnProperty(key)) {
                formData.append(key, payload[key]);
            }
        }
        animeCreate.mutateAsync(formData);
    }

    useEffect(() => {
        if (status === 'success') {
            setUaTitle('')
            setEnTitle('')
            setAired('')
            setCountry('')
            setEpisodes('')
            setTotalEpisodes('')
            setDirector('')
            setStudio('')
            setTranslated('')
            setTrailer('')
            setGenres([])
            setSynopsis('')
            setActiveCheck(1)
            setPreviewImage(null)
            setSubPreviewImage(null)
            setLogoImage(null)
            setStatus('')
        }
    }, [status]);

    return (
        <form onSubmit={onSubmit} noValidate>
            <div className={styles.formContainer}>
                <div className={styles.inputsBox}>
                    <AdminFormInput
                        className={errors && errors.ua_title ? styles.error : ''}
                        type='text'
                        name='ua_title'
                        id='ua_title'
                        placeholder='Ukrainian title'
                        value={uaTitle}
                        onChange={(e) => setUaTitle(e.target.value)}

                    />
                    <AdminFormInput
                        className={errors && errors.en_title ? styles.error : ''}
                        type='text'
                        name='en_title'
                        id='en_title'
                        placeholder='English title'
                        value={enTitle}
                        onChange={(e) => setEnTitle(e.target.value)}
                    />
                    <AdminFormInput
                        className={errors && errors.aired ? styles.error : ''}
                        type='text'
                        name='aired'
                        id='aired'
                        placeholder='Aired'
                        value={aired}
                        onChange={(e) => setAired(e.target.value)}
                    />
                    <AdminFormInput
                        className={errors && errors.country ? styles.error : ''}
                        type='text'
                        name='country'
                        id='country'
                        placeholder='Country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <AdminFormInput
                        className={errors && errors.episodes ? styles.error : ''}
                        type='text'
                        name='episodes'
                        id='episodes'
                        placeholder='Episodes'
                        value={episodes}
                        onChange={(e) => setEpisodes(e.target.value)}
                    />
                    <AdminFormInput
                        className={errors && errors.total_episodes ? styles.error : ''}
                        type='text'
                        name='total_episodes'
                        id='total_episodes'
                        placeholder='Total Episodes'
                        value={totalEpisodes}
                        onChange={(e) => setTotalEpisodes(e.target.value)}
                    />
                    <AdminFormInput
                        className={errors && errors.director ? styles.error : ''}
                        type='text'
                        name='director'
                        id='director'
                        placeholder='Director'
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                    <AdminFormInput
                        className={errors && errors.studio ? styles.error : ''}
                        type='text'
                        name='studio'
                        id='studio'
                        placeholder='Studio'
                        value={studio}
                        onChange={(e) => setStudio(e.target.value)}
                    />
                    <AdminFormInput
                        className={errors && errors.translated ? styles.error : ''}
                        type='text'
                        name='translated'
                        id='translated'
                        placeholder='Translated'
                        value={translated}
                        onChange={(e) => setTranslated(e.target.value)}
                    />
                    <AdminFormInput
                        className={errors && errors.trailer ? styles.error : ''}
                        type='text'
                        name='trailer'
                        id='trailer'
                        placeholder='Trailer Link'
                        value={trailer}
                        onChange={(e) => setTrailer(e.target.value)}
                    />
                    <SelectInput
                        error={errors && errors.genres ? errors.genres : ''}
                        options={isLoading ? [] : genresSelect}
                        placeholder={`Genres`}
                        setValue={setGenres}
                        value={genres}
                        isLoading={isLoading}
                        isMulti
                    />
                    <AdminFormTextarea
                        className={`${styles.textarea} ${errors && errors.synopsis ? styles.error : ''}`}
                        type='text'
                        name='synopsis'
                        id='synopsis'
                        placeholder='Synopsis'
                        value={synopsis}
                        onChange={(e) => setSynopsis(e.target.value)}
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
                        className={`${styles.previewImage} ${errors && errors.preview ? styles.errorFile : ''}`}
                        placeholder={'Upload Preview'}
                        image={previewImage}
                        setImage={setPreviewImage}

                    />
                    <ImageUploader
                        className={`${styles.subPreviewImage} ${errors && errors.sub_preview ? styles.errorFile : ''}`}
                        placeholder={'Upload Sub-Preview'}
                        image={subPreviewImage}
                        setImage={setSubPreviewImage}
                    />
                    <ImageUploader
                        className={`${styles.logoImage} ${errors && errors.logo ? styles.errorFile : ''}`}
                        placeholder={'Upload Logo'}
                        image={logoImage}
                        setImage={setLogoImage}
                    />
                </div>


            </div>
        </form>
    )
}

export default AddAnime