export function CommentPreview({ comment }) {

    return (
        <article>
            <p><span className="user-name">{comment.by.userName}</span><span>{comment.txt}</span></p>
            <p>{comment.createdAt}</p>
        </article>
    )
}