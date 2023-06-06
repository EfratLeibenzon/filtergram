import { useState } from 'react'
import { uploadService } from '../services/upload.service'
import uploadingImg from '../assets/img/uploadingImg.jpeg'

export function ImgUploader({ onUploaded = null }) {
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
    <div className="upload-preview">
      <img className='bg-img' src={uploadingImg} alt="" />
      {imgData.imgUrl && <img src={imgData.imgUrl} />}
      <label htmlFor="imgUpload">{getUploadLabel()}</label>
      <button className='img-btn'>
        <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
      </button>
    </div>
  )
}