import styles from '../../../forms.module.css'
import AdminFormInput from '../../../../../../UI/inputs/AdminFormInput'
import { BlackButton } from '../../../../../../UI/buttons/BlackButton'
import ImageUploader from '../../../../../../UI/inputs/ImageUploader'
import SelectInput from '../../../../../../UI/inputs/SelectInput'
import { useAnimes } from '../../../../../../hooks/anime/useAnimes'
import { useEffect, useState } from 'react'
import VideoUploader from '../../../../../../UI/inputs/VideoUploader'
import useSeriesCreate from '../../../../../../hooks/admin/useSeriesCreate'
import Spinner from "../../../../../../UI/loader/Spinner"


const UploadSeries = () => {
    const { data: animes, isLoading } = useAnimes()
    const [selectData, setSelectData] = useState([])
    const [series, setSeries] = useState(null)
    const [relationData, setRelationData] = useState([])
    const { seriesCreate, errors, status, setStatus, progress } = useSeriesCreate()

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
        // formData.append('series', series)

        seriesCreate.mutateAsync(formData)
    }


    useEffect(() => {
      console.log(progress)
    }, [progress])
    

    return (
        <form onSubmit={onSubmit} noValidate>
            <h3 className={styles.formName}>Colored banner form</h3>
            <div className={styles.formContainer}>
                <div className={styles.inputsBox}>
                    <SelectInput
                        // error={errors && errors.anime_id ? errors.anime_id : ''}
                        options={isLoading ? [] : selectData[0] ? selectData[0] : []}
                        placeholder={`Choose relation anime`}
                        setValue={setRelationData}
                        value={relationData}
                        isLoading={isLoading}
                        closeMenuOnSelect
                    />
                    <VideoUploader
                        video={series}
                        setVideo={setSeries}
                    />
                    <div className={styles.actionBtns}>
                        {progress && (<span>{progress}%</span>)}
                        <BlackButton
                            title={seriesCreate.isLoading ? <Spinner size={16} /> : `Submit`}
                            className={styles.submitBtn} type='submit'
                        />
                    </div>
                </div>

                <div className={styles.imagesBox}>

                </div>
            </div>
        </form >
    )
}

export default UploadSeries