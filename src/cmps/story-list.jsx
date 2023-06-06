import { StoryPreview } from "./story-preview";

export function StoryList({ storys, onRemoveStory }) {


    return (
        <ul className="story-list clean-list">
            {storys.map(story =>
                <li className="story-preview column" key={story._id}>
                    <StoryPreview story={story} onRemoveStory={onRemoveStory} />
                </li>
            )}

        </ul>
    )
}