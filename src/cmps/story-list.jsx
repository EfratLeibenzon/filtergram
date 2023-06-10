import { StoryPreview } from "./story-preview";

export function StoryList({ storys, onRemoveStory, setIsStoryDetailsOpen, isStoryDetailsOpen }) {


    return (
        <ul className="story-list clean-list">
            {storys.map(story =>
                <li key={story._id}>
                    <StoryPreview story={story} onRemoveStory={onRemoveStory} setIsStoryDetailsOpen={setIsStoryDetailsOpen} isStoryDetailsOpen={isStoryDetailsOpen} />
                </li>
            )}

        </ul>
    )
}