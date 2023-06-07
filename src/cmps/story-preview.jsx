import { AiOutlineHeart } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { RiBookmarkLine } from 'react-icons/ri'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { IoIosMore } from 'react-icons/io'


export function StoryPreview({ story, onRemoveStory }) {

    function onOpenStoryDetails() {

    }
    const style = { color: 'black' }
    return (
        <article>
            <header className="story-header flex space-between">
                <div className="user-preview flex">
                    <img className="mini-user-img" src={story.by.userImgUrl} alt="" />
                    <h4 className="user-name">{story.by.fullname}</h4>
                </div>
                <div>
                    <button className=" icon-btn remove-btn" onClick={() => { onRemoveStory(story._id) }}><IoIosMore style={style} /></button>
                </div>
            </header>
            <img className="story-img" src={story.imgUrl} alt="" />
            <div className="action-btns">
                {/* <i class="fa-regular fa-heart"></i> 
                 <i class="fa-solid fa-heart"></i> full like*/}
                {/* <i class="fa-regular fa-comment"></i> */}
                <button className='icon-btn'><AiOutlineHeart style={style} /></button>
                <button className='icon-btn' onClick={onOpenStoryDetails}><IoChatbubbleOutline style={style} /></button>
                <button className='icon-btn'><FiSend style={style} /></button>
                <button className='icon-btn'><RiBookmarkLine style={style} /></button>
            </div>
            <section>likes:{story.likedBy.length}</section>
            <p><span className="user-name">{story.by.fullname}</span>.  .<span className="story-txt">{story.txt}</span></p>
        </article>
    )
}