import { useEffect, useState } from "react"
import { storyService } from "../services/story.service.local"
import { useParams } from "react-router-dom"

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


    function onUploadImg(ev) {
        console.log(ev)

    }

    return (
        <div className="story-edit">
            {!storyId && <UploadImg />}
            {/* {storyId && } */}
        </div>
    )

    function UploadImg() {
        return (
            <form onSubmit={onUploadImg}>
                <input type="file" />
            </form>
        )
    }
}