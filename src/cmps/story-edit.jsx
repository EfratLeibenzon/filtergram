import { useEffect, useState } from "react"
import { storyService } from "../services/story.service.local"
import { useParams } from "react-router-dom"
import { uploadService } from "../services/upload.service"
import { ImgUploader } from "./img-uploader"
import { addStory } from "../store/story.actions"

export function StoryEdit() {
    const [storyToEdit, setStoryToEdit] = useState(storyService.getEmptyStory())
    const { storyId } = useParams()

    useEffect(() => {
        if (!storyId) return
        loadStory()
    }, [])

    function loadStory() {
        storyService.getById(storyId)
            .then((story) => setStoryToEdit(story)) // change to try
            .catch((err) => {
                console.log('couldnt load story', err)
                // navigate('/story')
            })
    }

    function onUploadedImg(imgUrl) {
        console.log('oved!', imgUrl)
        setStoryToEdit({ ...storyToEdit, imgUrl })
        const newText = prompt('enter your text:')
        setStoryToEdit({ ...storyToEdit, txt: newText })
    }

    function onSaveStory() {
        console.log(storyToEdit)

        addStory(storyToEdit)

    }

    return (
        <div className="story-edit">
            <ImgUploader onUploaded={onUploadedImg} />
            {storyToEdit.txt && <button onClick={onSaveStory}>Post</button>}
        </div>
    )

}