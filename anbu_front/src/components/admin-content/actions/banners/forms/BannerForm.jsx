import styles from '../../forms.module.css'
import React, { useEffect, useState } from 'react'
import { useAnimes } from '../../../../../hooks/anime/useAnimes'
import SelectInput from '../../../../../UI/inputs/SelectInput'
import ImageUploader from '../../../../../UI/inputs/ImageUploader'
import { BlackButton } from '../../../../../UI/buttons/BlackButton'
import useBannerCreate from '../../../../../hooks/admin/useBannerCreate'
import PromoForm from './PromoForm'

const BannerForm = () => {
    const { data: animes, isLoading } = useAnimes()
    const { bannerCreate, errors, status, setStatus } = useBannerCreate()
    const [selectData, setSelectData] = useState([])
    const [relationData, setRelationData] = useState([])
    const [pngPreviewImage, setPngPreviewImage] = useState(null)



    useEffect(() => {
        if (!isLoading) {
            const rewritedData = [
                animes.map((item) => ({
                    id: item.id,
                    name: `${item.id} - ${item.ua_title}`,
                }))
            ]
            setSelectData(rewritedData)
        }
    }, [animes])

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('anime_id', relationData.value ? relationData.value : '')
        formData.append('png_preview', pngPreviewImage)

        bannerCreate.mutateAsync(formData)
    }

    useEffect(() => {
        if (status === 'success') {
            setRelationData([])
            setPngPreviewImage(null)
        }
    }, [status]);

    return (
        <div className={styles.formsContainer}>
            <form onSubmit={onSubmit} noValidate>
                <h3 className={styles.formName}>Colored banner form</h3>
                <div className={styles.formContainer}>
                    <div className={styles.inputsBox}>
                        <SelectInput
                            error={errors && errors.anime_id ? errors.anime_id : ''}
                            options={isLoading ? [] : selectData[0] ? selectData[0] : []}
                            placeholder={`Choose relation anime`}
                            setValue={setRelationData}
                            value={relationData}
                            isLoading={isLoading}
                            closeMenuOnSelect
                        />
                        <div className={styles.actionBtns}>
                            <BlackButton title={`Submit`} className={styles.submitBtn} type='submit' />
                        </div>
                    </div>

                    <div className={styles.imagesBox}>
                        <ImageUploader
                            className={`${styles.pngPreviewImage} ${errors && errors.png_preview ? styles.errorFile : ''}`}
                            placeholder={'Upload Png Preview'}
                            image={pngPreviewImage}
                            setImage={setPngPreviewImage}
                        />
                    </div>
                </div>
            </form >
            <PromoForm/>
        </div>
    )
}

export default BannerForm