import { useEffect, useRef } from "react"
import { setPath } from "../store/story.actions"


export function UploadWidget() {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'duxmabf4n',
            uploadPreset: 'w1nxvekj'
        }, function (err, res) {
            if (res.event === 'queues-end') {
                const path = res.info.files[0].uploadInfo.path
                console.log('path:', path)
                setPath(path)
            }
        })
    }, [])
    return <button onClick={() => widgetRef.current.open()}>upload</button>
}