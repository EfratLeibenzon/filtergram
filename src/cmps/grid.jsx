

export function PreviewGrid({ stories }) {
    console.log('Grid stories', stories)
    return (
        < div >
            <ul className="story-grid clean-list">
                {stories.map(story =>
                    <li className="story-grid-preview" key={story._id}>
                        <img className="story-grid-img" src={story.img.url} style={story.img.style} alt="" />
                    </li>
                )}
            </ul>
        </div >
    )
}