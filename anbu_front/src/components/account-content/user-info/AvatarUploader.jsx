import styles from './user-info.module.css'
import { useEffect, useRef, useState } from 'react'

const AvatarUploader = ({ name, image, setImage, currentAvatar }) => {
    const imageInputRef = useRef()
    const [preview, setPreview] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const MAX_WIDTH = 600;
                    const MAX_HEIGHT = 600;
                    let width = img.width;
                    let height = img.height;
    
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
    
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, width, height);
                    const dataURL = canvas.toDataURL(file.type);
                    setPreview(dataURL);
                    setImage(file);
                };
            };
        }
    };
    

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
                    currentAvatar &&
                    <img
                        src={`http://127.0.0.1:8000/${currentAvatar}`}
                    />
                }
            </div>
        </div>
    )
}

export default AvatarUploader