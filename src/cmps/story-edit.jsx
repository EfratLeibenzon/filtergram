import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { storyService } from "../services/story.service.local"
import { useNavigate, useParams } from "react-router-dom"
import { ImgUploader } from "./img-uploader"
import { addStory } from "../store/story.actions"
import { EditImg } from "./edit-img"
import { CreateStoryTitle } from "./edit-story-title"

export function StoryEdit({ isStoryEdit, setisStoryEdit }) {

    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    let storyToEdit = useRef(storyService.getEmptyStory())
    const { storyId } = useParams()
    const [stage, setStage] = useState(0)



    useEffect(() => {
        if (!storyId) {
            // storyToEdit = storyService.getEmptyStory()
            setStage(1)
        } else {
            loadStory()
            setStage(3)
        }
    }, [])

    async function loadStory() {
        try {
            storyToEdit = await storyService.getById(storyId)
        } catch (err) {
            console.log('couldnt load story', err)
        }
    }

    function onUploaded(imgUrl) {
        console.log(imgUrl)
        storyToEdit.current = { ...storyToEdit.current, img: { ...storyToEdit.current.img, url: imgUrl }, by:user }
        console.log(storyToEdit)
        setStage(2)
    }

    async function onSaveStory(title) {
        const timeStamp = Date.now()
        try {
            storyToEdit.current = { ...storyToEdit.current, txt: title, createdAt: timeStamp }
            const story = await addStory(storyToEdit.current)
            console.log(`story after!`, story)
        } catch (err) {
            console.log('Cannot add story', err)
        }
        finally {
            console.log('finally')
            onCloseEdit()
        }
    }

    function setImgStyle(newStyle) {
        storyToEdit.current = { ...storyToEdit.current, img: { ...storyToEdit.current.img, style: newStyle } }
        setStage(3)
    }

    function onCloseEdit() {
        setisStoryEdit(false)
    }


    return (
        <div className="story-edit">

            <button className="exit-btn" onClick={onCloseEdit}>x</button>
            {storyToEdit && <DynamicComponent
                stage={stage}
                onUploaded={onUploaded}
                imgUrl={storyToEdit.current.img.url}
                storyToEdit={storyToEdit}
                setImgStyle={setImgStyle}
                onSaveStory={onSaveStory}

            />}

        </div>
    )
}

function DynamicComponent({ stage, onUploaded, imgUrl, storyToEdit, setImgStyle, onSaveStory }) {
    switch (stage) {
        case 1:
            console.log('storyToEdit inside case 1:', storyToEdit)
            return <ImgUploader onUploaded={onUploaded} />
        // break
        case 2:
            console.log('storyToEdit inside case 2:', storyToEdit)
            return <EditImg imgUrl={imgUrl} setImgStyle={setImgStyle} />
        // break
        case 3:
            console.log('storyToEdit inside case 3:', storyToEdit)
            return <CreateStoryTitle storyToEdit={storyToEdit} onSaveStory={onSaveStory} />
        // break
    }
}