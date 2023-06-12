import { useEffect, useRef, useState } from "react"
import { storyService } from "../services/story.service.local"
import { useParams } from "react-router-dom"
import { ImgUploader } from "./img-uploader"
import { addStory } from "../store/story.actions"
import { EditImg } from "./edit-img"
import { CreateStoryTitle } from "./edit-story-title"
import { xButton } from "./icons"


export function StoryEdit({ setisStoryEdit }) {

    let storyToEdit = useRef(storyService.getEmptyStory())
    const { storyId } = useParams()
    const [stage, setStage] = useState(0)


    useEffect(() => {
        if (!storyId) {
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
        storyToEdit.current = { ...storyToEdit.current, img: { ...storyToEdit.current.img, url: imgUrl } }
        setStage(2)
    }

    function setImgStyle(newStyle) {
        storyToEdit.current = { ...storyToEdit.current, img: { ...storyToEdit.current.img, style: newStyle } }
        setStage(3)
    }

    async function onSaveStory(title) {
        const timeStamp = Date.now()
        try {
            storyToEdit.current = { ...storyToEdit.current, txt: title, createdAt: timeStamp }
            const story = await addStory(storyToEdit.current)
            console.log(`story with id ${story._id} added`)
        } catch (err) {
            console.log('Cannot add story', err)
        }
        finally {
            onCloseEdit()
        }
    }

    function onCloseEdit() {
        setisStoryEdit(false)
    }

    return (
        <div className="story-edit">
            <button className="exit-btn" onClick={onCloseEdit}>{xButton}</button>
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
            return <ImgUploader onUploaded={onUploaded} />
        case 2:
            return <EditImg imgUrl={imgUrl} setImgStyle={setImgStyle} />
        case 3:
            return <CreateStoryTitle storyToEdit={storyToEdit} onSaveStory={onSaveStory} />
    }
}