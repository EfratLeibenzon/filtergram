import { useEffect, useState } from "react"
import { storyService } from "../services/story.service.local"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { ImgUploader } from "./img-uploader"
import { addStory } from "../store/story.actions"

export function StoryEdit({ storyToAdd, setStoryToAdd }) {
    const [storyToEdit, setStoryToEdit] = useState(storyToAdd || storyService.getEmptyStory())
    // const [stage, setStage] = useState()
    const { storyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!storyId) return
        loadStory()
    }, [])

    // function onSetStage() {
    //     if (!storyToEdit.imgUrl) setStage('imgUpload')
    //     if (storyToEdit)
    // }

    async function loadStory() {
        try {
            const story = await storyService.getById(storyId)
            setStoryToEdit(story)
        } catch (err) {
            console.log('couldnt load story', err)
        }
    }

    function onUploadedImg(imgUrl) {
        setStoryToEdit((prevStoryToEdit) => ({ ...prevStoryToEdit, imgUrl: imgUrl }))
    }

    async function onSaveStory(ev) {
        ev.preventDefault()
        try {
            storyToEdit.createdAt = Date.now()
            setStoryToAdd(storyToEdit)
            await addStory(storyToEdit)
            setStoryToAdd(null)
            console.log('story added!')
        } catch (err) {
            console.log('Cannot add story', err)
        }
        navigate('/')
    }

    return (
        <div className="story-edit">
            {/* <DynamicComponent onUploaded={onUploadedImg} imgUrl={storyToEdit.imgUrl} storyToEdit={storyToEdit} setStoryToEdit={setStoryToEdit} onSaveStory={onSaveStory} /> */}
            {!storyToEdit.imgUrl && <ImgUploader onUploaded={onUploadedImg} />}
            {/* {storyToEdit.imgUrl && <EditImg imgUrl={storyToEdit.imgUrl} />} */}
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

function DynamicComponent({ onUploadedImg, storyToEdit, setStoryToEdit, onSaveStory }) {
    if (!storyToEdit.imgUrl && !storyToEdit.txt) return <ImgUploader onUploaded={onUploadedImg} />
    else if (storyToEdit.imgUrl && !storyToEdit.txt) return <EditImg imgUrl={storyToEdit.imgUrl} />
    return <CreateStoryTitle storyToEdit={storyToEdit} setStoryToEdit={setStoryToEdit} onSaveStory={onSaveStory} />
}

function EditImg(imgUrl) {
    return (
        <div className="edit-img flex row">
            <section className="img-preview">
                <img src={imgUrl} alt="" />
            </section>
            <section className="img-editors">
                <img onClick={() => console.log('Black & white')} src='https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg' alt="" style={{ height: '50px', width: '50px' }} />
            </section>
        </div>
    )

}
