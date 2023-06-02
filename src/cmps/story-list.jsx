import { StoryPreview } from "./story-preview";

export function StoryList({ storys, onRemoveStory }) {


    return (
        <ul className="story-list">
            {storys.map(story =>
                <li className="story-preview" key={story._id}>
                    <StoryPreview story={story} />
                    <div>
                        <button className="remove-btn" onClick={() => { onRemoveStory(story._id) }}>Remove</button>
                    </div>

                </li>
            )}

        </ul>
    )
}