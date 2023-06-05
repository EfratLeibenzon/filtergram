import { useEffect, useState } from "react"
import { storyService } from "../services/story.service.local"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { ImgUploader } from "./img-uploader"
import { addStory } from "../store/story.actions"

export function StoryEdit() {
    const [storyToEdit, setStoryToEdit] = useState(storyService.getEmptyStory())
    const { storyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!storyId) return
        loadStory()
    }, [])

    function loadStory() {
        storyService.getById(storyId)
            .then((story) => setStoryToEdit(story)) // change to try
            .catch((err) => {
                console.log('couldnt load story', err)
            })
    }

    function onUploadedImg(imgUrl) {
        console.log('oved!', imgUrl)
        setStoryToEdit((prevStoryToEdit) => ({ ...prevStoryToEdit, imgUrl: imgUrl }))
    }

    function onSaveStory(ev) {
        ev.preventDefault()
        console.log(storyToEdit)
        addStory(storyToEdit)
        navigate('/')

    }

    return (
        <div className="story-edit">
            {!storyToEdit.imgUrl && <ImgUploader onUploaded={onUploadedImg} />}
            {storyToEdit.imgUrl && <CreateStoryTitle storyToEdit={storyToEdit} setStoryToEdit={setStoryToEdit} onSaveStory={onSaveStory} />}
        </div>
    )

}

function CreateStoryTitle({ storyToEdit, setStoryToEdit, onSaveStory }) {

    function handleChange({ target }) {
        let { value, name: field } = target
        setStoryToEdit((prev) => ({ ...prev, [field]: value }))

    }
    return (
        <div>
            <section className="edit-story-img">
                <img src={storyToEdit.imgUrl} alt="" />
            </section>
            <section className="edit-story-form">
                <form onSubmit={onSaveStory}>
                    <label htmlFor="txt">
                        <input onChange={handleChange} type="text" name="txt" id="txt" placeholder="Write a caption..." />
                    </label>
                    <button>Post</button>
                </form>
            </section>
        </div>
    )
}