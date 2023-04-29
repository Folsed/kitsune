import { useEffect, useState } from 'react'
import styles from './forms.module.css'
import { BlackButton } from '../../../../../UI/buttons/BlackButton'
import ImageUploader from '../../../../../UI/inputs/ImageUploader'
import SelectInput from '../../../../../UI/inputs/SelectInput'
import { useAnimes } from '../../../../../hooks/useAnimes'
import { useCarouselMutate } from '../../../../../hooks/useCarouselMutate'


const CarouselForm = () => {
    const [slide, setSlide] = useState(null)
    const [anime, setAnime] = useState([])
    const [select, setSelect] = useState([])
    const { isLoading, data: animes } = useAnimes()
    const { carousel, setErrors, status, setStatus } = useCarouselMutate()


    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('slide', slide)
        formData.append('anime', anime.value)

        carousel.mutateAsync(formData);
    }

    useEffect(() => {
        if (!isLoading) {
            const selectItems = animes.map((item) => ({
                id: item.id,
                name: `${item.id} - ${item.ua_title}/${item.en_title}`,
            }))
            setSelect(selectItems)
        }

        if (status === 'success') {
            setAnime([])
            setSlide(null)
            setStatus('')
        }
    }, [isLoading, status])



    return (
        <form onSubmit={onSubmit} noValidate>
            <div className={styles.formContainer}>

                <div className={styles.imagesBox}>
                    <SelectInput
                        // error={errors && errors.genres ? errors.genres : ''}
                        options={isLoading ? [] : select}
                        placeholder={`Attached anime`}
                        setValue={setAnime}
                        value={anime}
                        isLoading={isLoading}
                        closeMenuOnSelect
                    />
                    <ImageUploader
                        // className={`${styles.previewImage} ${errors && errors.preview ? styles.errorFile : ''}`}
                        placeholder={'Upload Slide'}
                        image={slide}
                        setImage={setSlide}

                    />

                    <div className={styles.actionBtns}>
                        <BlackButton title={`Submit`} className={styles.submitBtn} type='submit' />
                    </div>
                </div>


            </div>
        </form>
    )
}

export default CarouselForm