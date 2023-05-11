import styles from './user-info.module.css'
import { ReactComponent as ImageUploaderIcon } from '../../../assets/icons/uploader.svg'
import { useEffect, useRef, useState } from 'react'

const AvatarUploader = ({ name, image, setImage, currentAvatar }) => {
    const imageInputRef = useRef()
    const [preview, setPreview] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
            setImage(file)
        }
    }

    const handleUploaderClick = () => {
        if (imageInputRef.current) {
            imageInputRef.current.click()
        }
    }

    useEffect(() => {
        imageInputRef.current.value = "";
    }, [image])


    return (
        <div className={styles.uploaderBox}>
            <div
                className={styles.fileUploader}
                onClick={handleUploaderClick}
            >
                <div className={styles.editButton}>
                    <span>Змінити</span>
                </div>
                <input
                    type='file'
                    accept='image/*,.jpe'
                    id='file-uploader'
                    name={name}
                    hidden
                    ref={imageInputRef}
                    onChange={handleFileChange}
                />
                {image ?
                    <img src={preview} alt="" />
                    :
                    <img
                        src={`http://127.0.0.1:8000/${currentAvatar}`}
                    />
                }
            </div>
        </div>
    )
}

export default AvatarUploader