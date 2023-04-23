import styles from './input.module.css'
import { ReactComponent as ImageUploaderIcon } from '../../assets/icons/uploader.svg'
import { ReactComponent as DestroyImage } from '../../assets/icons/delete.svg'
import { useEffect, useRef, useState } from 'react'

const ImageUploader = ({ name, className, placeholder, image, setImage }) => {
    const imageInputRef = useRef()
    const [preview, setPreview] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
            setImage(file)
        }
    }

    const handleFileDestroy = () => {
        setImage(null)
        imageInputRef.current.value = "";
    }

    const handleUploaderClick = () => {
        if (!image && imageInputRef.current) {
            imageInputRef.current.click()
        }
    }

    useEffect(() => {
        imageInputRef.current.value = "";
    }, [image])


    return (
        <div className={styles.uploaderBox}>
            <div
                className={`${styles.fileUploader} ${className ? className : ''}`}
                onClick={handleUploaderClick}
            >
                <input
                    type='file'
                    accept='image/*'
                    id='file-uploader'
                    name={name}
                    hidden
                    ref={imageInputRef}
                    onChange={handleFileChange}
                />
                {image ?
                    <img src={preview} alt="" />
                    :
                    <ImageUploaderIcon fill='#dadada' width={`15%`} className={styles.uploaderIcon} />
                }
                <span>{placeholder}</span>
            </div>
            {image ?
                <DestroyImage className={styles.destroy} onClick={handleFileDestroy} />
                :
                ''
            }
        </div>
    )
}

export default ImageUploader