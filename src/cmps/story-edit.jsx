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
            {/* <DynamicComponent stage={stage} /> */}
            {!storyToEdit.imgUrl && <ImgUploader onUploaded={onUploadedImg} />}
            {(storyToEdit.imgUrl && !storyToEdit.txt) && <EditImg imgUrl={storyToEdit.imgUrl} />}
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

// function DynamicComponent(stage) {
//     switch (stage) {
//         case 'imgUpload':
//             <ImgUploader onUploaded={onUploadedImg} />
//             break
//         // case 'imgEdit':
//         //     <ImgUploader onUploaded={onUploadedImg} />
//         //     break
//         case 'addTxt':
//             <CreateStoryTitle storyToEdit={storyToEdit} setStoryToEdit={setStoryToEdit} onSaveStory={onSaveStory} />
//             break
//     }

// }

function EditImg(imgUrl) {

    return (
        <div>
            <section>
                <img src={imgUrl} alt="" />
            </section>
            <section>
                <img onClick={console.log('Black & white')} src='https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg' alt="" style={{ height: '50px', width: '50px' }} />
            </section>
        </div>

    )

}
