


export function StoryPreview({ story, onRemoveStory }) {

    function onOpenStoryDetails() {

    }

    return (
        <article>
            <header className="story-header">
                <div>
                    <button className="remove-btn" onClick={() => { onRemoveStory(story._id) }}>Remove</button>
                </div>
                <div>
                    <img className="mini-user-img" src={story.by.userImgUrl} alt="" />
                    <h4 className="user-name">{story.by.fullname}</h4>
                </div>

            </header>
            <img className="story-img" src={story.imgUrl} alt="" />
            <div className="action-btns">
                <button>like</button>
                <button>save</button>
                <button>share</button>
                <button onClick={onOpenStoryDetails}>comment</button>
            </div>
            <section>likes:{story.likedBy.length}</section>
            <p><span className="user-name">{story.by.fullname}</span>.  .<span className="story-txt">{story.txt}</span></p>
        </article>
    )
}