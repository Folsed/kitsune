import styles from '../../forms.module.css'
import React, { useEffect, useState } from 'react'
import { useAnimes } from '../../../../../hooks/anime/useAnimes'
import SelectInput from '../../../../../UI/inputs/SelectInput'
import ImageUploader from '../../../../../UI/inputs/ImageUploader'
import { BlackButton } from '../../../../../UI/buttons/BlackButton'
import usePromoBannerCreate from '../../../../../hooks/admin/usePromoBannerCreate'

const PromoForm = () => {
    const { data: animes, isLoading } = useAnimes()
    const { promoCreate, errors, status, setStatus } = usePromoBannerCreate()
    const [selectData, setSelectData] = useState([])
    const [relationData, setRelationData] = useState([])
    const [promoImage, setPromoImage] = useState(null)



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
        formData.append('promo', promoImage)

        promoCreate.mutateAsync(formData)
    }

    useEffect(() => {
        if (status === 'success') {
            setRelationData([])
            setPromoImage(null)
        }
    }, [status]);

    return (
        <form onSubmit={onSubmit} noValidate>
            <h3 className={styles.formName}>Promo banner form</h3>
            <div className={styles.formContainer}>
                <div className={styles.imagesBox}>
                    <SelectInput
                        error={errors && errors.anime_id ? errors.anime_id : ''}
                        options={isLoading ? [] : selectData[0] ? selectData[0] : []}
                        placeholder={`Choose relation anime`}
                        setValue={setRelationData}
                        value={relationData}
                        isLoading={isLoading}
                        closeMenuOnSelect
                    />
                    <ImageUploader
                        className={`${styles.promoImage} ${errors && errors.promo ? styles.errorFile : ''}`}
                        placeholder={'Upload Png Preview'}
                        image={promoImage}
                        setImage={setPromoImage}
                    />
                    <div className={styles.actionBtns}>
                        <BlackButton title={`Submit`} className={styles.submitBtn} type='submit' />
                    </div>
                </div>
            </div>
        </form >
    )
}

export default PromoForm