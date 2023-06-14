import { storyService } from "../services/story.service.local"


export function PreviewGrid({ storiesId }) {
    console.log('Grid stories 1', storiesId)
    const stories = storiesId.map(storyId => storyService.getById(storyId))
    console.log('Grid stories 2', stories)

    return (
        < div >
            <ul className="story-grid clean-list">
                {stories.map(promis => promis.then(story => {
                    console.log(story)
                    return <li className="story-grid-preview" key={story._id}>
                        <img className="story-grid-img" src={story.img.url} style={story.img.style} alt="" />
                    </li>
                }
                )
                )
                }
            </ul>
        </div >
    )
}