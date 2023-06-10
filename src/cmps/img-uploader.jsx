import { useState } from 'react'
import { uploadService } from '../services/upload.service'
import { uploadBgImg } from './icons'

export function ImgUploader({ onUploaded = null }) {
  console.log('ImgUploader working')
  const [imgData, setImgData] = useState({
    imgUrl: null,
    height: 500,
    width: 500,
  })

  const [isUploading, setIsUploading] = useState(false)

  async function uploadImg(ev) {
    setIsUploading(true)
    const { secure_url, height, width } = await uploadService.uploadImg(ev)
    setImgData({ imgUrl: secure_url, width, height })
    setIsUploading(false)
    onUploaded && onUploaded(secure_url)
  }

  function getUploadLabel() {
    if (imgData.imgUrl) return 'Upload Another?'
    return isUploading ? 'Uploading....' : 'Upload Image'
  }

  return (
    <div className="img-uploader">
      <header>
        <h1>Create new post</h1>
      </header>
      {imgData.imgUrl && <img src={imgData.imgUrl} />}
      {/* <label htmlFor="imgUpload">{getUploadLabel()}</label> */}
      <section className='icon'>{uploadBgImg}</section>
      <p>Drag photos and videos here</p>
      <button className='input-btn'>Select from computer
        <input className='img-input hidden' type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
      </button>
    </div>
  )
}