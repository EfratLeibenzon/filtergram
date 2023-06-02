import { useState } from "react"
import { storyService } from "../services/story.service.local"

export function StoryAdd() {
    const [storyToEdit, setStoryToEdit] = useState(storyService.getEmptyStory())

    function handleChange({ target }) {
        console.log(target.files)
        setStoryToEdit({ ...storyToEdit, imgUrl: target.value })
    }

    function toggleHidden() {

    }

    return (
        <div className="story-add">
            {!storyToEdit.imgUrl && (
                <section className="img-loader">
                    <input onChange={handleChange} type="file" id="file-input" name="ImageStyle" />
                </section>)}
            {storyToEdit.imgUrl && (
                <section className="img-to-edit">
                    <img src={storyToEdit.imgUrl} alt="" />
                </section>)}
        </div>

    )
}