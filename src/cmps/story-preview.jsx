
import { CommentIndex } from './comment-index'
import { CommentList } from './comment-list'
import { commentIcon, likeIcon, optionsIcon, savedIcon, sendIcon } from './icons'

export function StoryPreview({ story, onRemoveStory }) {

    function onOpenStoryDetails() {

    }

    function likesCount(likesCount) {
        if (likesCount > 1) return <section>{likesCount} likes</section>
        else if (likesCount === 1) return <section>{likesCount} like</section>
        return <section>no likes yet</section>
    }

    return (
        <article>
            <header className="story-header flex space-between">
                <div className="user-preview flex">
                    <img className="mini-user-img" src={story.by.userImgUrl} alt="" />
                    <h4 className="user-name">{story.by.userName}</h4>
                </div>
                <div>
                    <button className=" icon-btn remove-btn" onClick={() => { onRemoveStory(story._id) }}><span>{optionsIcon}</span></button>
                </div>
            </header>
            <img className="story-img" src={story.imgUrl} alt="" />
            <div className="action-btns">
                <button className='icon-btn'><span>{likeIcon}</span></button>
                <button className='icon-btn' onClick={onOpenStoryDetails}><span>{commentIcon}</span></button>
                <button className='icon-btn'><span>{sendIcon}</span></button>
                <button className='icon-btn'><span>{savedIcon}</span></button>
            </div>
            {likesCount(story.likedBy.length)}
            <p><span className="user-name">{story.by.userName}</span><span className="story-txt">{story.txt}</span></p>
            <CommentList comments={story.comments} />
            <CommentIndex story={story} />
        </article>
    )
}