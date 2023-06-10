import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { CommentAdd } from './comment-add'
import { CommentList } from './comment-list'
import { LikeBtn } from './like-btn.jsx'
import { toggleLike } from '../store/story.actions.js'
import { commentIcon, likeIcon, optionsIcon, savedIcon, sendIcon } from './icons'
import { useNavigate } from 'react-router'
import { LongTxt } from './long-txt'

export function StoryPreview({ story, onRemoveStory }) {
    const navigate = useNavigate()

    const user = useSelector(storeState => storeState.userModule.user)
    const isLiked = story.likedBy.some((u) => u._id === user._id)

    const onToggleLike = useCallback(() => {
        toggleLike(story, user)
    }, [story, user])

    function onOpenStoryDetails() {

    }

    function likesPreview(likesCount) {
        if (likesCount > 1) return <section>{likesCount} likes</section>
        else if (likesCount === 1) return <section>{likesCount} like</section>
        return <section>no likes yet</section>
    }

    function getComments(comments) {
        const commentsCount = comments.length
        let shownComments = (commentsCount >= 2) ? [comments[commentsCount - 1], comments[commentsCount - 2]] : comments
        const isMore = (comments.length > 2)

        return (
            <section>
                <CommentList comments={shownComments} />
                {isMore && <button > view all {commentsCount} comments </button>}
            </section>)

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
                {/* <button className='icon-btn'><span>{likeIcon}</span></button> */}
                <LikeBtn className="icon-btn" toggleLike={onToggleLike} isLiked={isLiked} />
                <button className='icon-btn' onClick={onOpenStoryDetails}><span>{commentIcon}</span></button>
                <button className='icon-btn'><span>{sendIcon}</span></button>
                <button className='icon-btn'><span>{savedIcon}</span></button>
            </div>
            {likesPreview(story.likedBy.length)}
            <section className='story-title'>
                <p className="user-name">{story.by.userName}</p>
                <LongTxt txt={story.txt} length={119} />
            </section>
            {getComments(story.comments)}
            <CommentAdd story={story} />
        </article>
    )
}