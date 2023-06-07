import { AiOutlineHeart } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { RiBookmarkLine } from 'react-icons/ri'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { IoIosMore } from 'react-icons/io'
import { CommentIndex } from './comment-index'
import { CommentList } from './comment-list'


export function StoryPreview({ story, onRemoveStory }) {

    function onOpenStoryDetails() {

    }
    const style = { color: 'black' }

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
                    <button className=" icon-btn remove-btn" onClick={() => { onRemoveStory(story._id) }}><IoIosMore style={style} /></button>
                </div>
            </header>
            <img className="story-img" src={story.imgUrl} alt="" />
            <div className="action-btns">
                <button className='icon-btn'><AiOutlineHeart style={style} /></button>
                <button className='icon-btn' onClick={onOpenStoryDetails}><IoChatbubbleOutline style={style} /></button>
                <button className='icon-btn'><FiSend style={style} /></button>
                <button className='icon-btn'><RiBookmarkLine style={style} /></button>
            </div>
            {likesCount(story.likedBy.length)}
            <p><span className="user-name">{story.by.userName}</span><span className="story-txt">{story.txt}</span></p>
            <CommentList comments={story.comments} />
            <CommentIndex story={story} />


            <svg aria-label="New post" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
        </article>
    )
}