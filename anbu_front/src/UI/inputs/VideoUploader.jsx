import styles from './input.module.css'
import React, { useRef, useState } from 'react'
import { ReactComponent as ImageUploaderIcon } from '../../assets/icons/uploader.svg'


const VideoUploader = ({ width, height, className, video, setVideo }) => {
    const inputRef = useRef()
    const [source, setSource] = useState()

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        const url = URL.createObjectURL(file)
        setSource(url)
        setVideo(file)
    }

    const handleUploaderClick = () => {
        // if (!image && inputRef.current) {
        inputRef.current.click()
        // }
    }

    return (
        <div className={styles.uploaderBox}>
            <div
                className={`${styles.fileUploader} ${className ? className : ''}`}
                onClick={handleUploaderClick}
            >
                <input
                    ref={inputRef}
                    type="file"
                    onChange={handleFileChange}
                    accept=".mkv,.mp4"
                    hidden
                />
                {video && source ?
                    <video
                        className=""
                        width="400px"
                        height="300px"
                        controls
                        src={source}
                    />
                    :
                    <ImageUploaderIcon fill='#dadada' width={`15%`} className={styles.uploaderIcon} />
                }
                {/* <span>{placeholder}</span> */}
            </div>
        </div>
    );
}

export default VideoUploader