import { useState } from "react"
import { storyService } from "../services/story.service.local"

export function StoryAdd() {
    const [storyToEdit, setStoryToEdit] = useState(storyService.getEmptyStory())



    return (
        <div className="story-add">
            {console.log('hi from add post')}
        </div>
    )
}