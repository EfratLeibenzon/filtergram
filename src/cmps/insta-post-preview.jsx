

export function InstaPostPreview({ instaPost }) {


    return (
        <article className="insta-post-preview">
            <header className="insta-post-header">
                <img className="mini-user-img" src={instaPost.by.userImgUrl} alt="" />
                <h4 className="user-name">{instaPost.by.fullname}</h4>
            </header>
            <img className="insta-post-img" src={instaPost.imgUrl} alt="" />
            <div className="action-btns">
                <button>like</button>
                <button>save</button>
                <button>share</button>
                <button>comment</button>
            </div>
            <section>likes:{instaPost.likedBy.length}</section>
            <p><span className="user-name">{instaPost.by.fullname}</span>.  .<span className="insta-post-txt">{instaPost.txt}</span></p>
        </article>
    )
}