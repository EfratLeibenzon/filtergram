import { CommentPreview } from "./comment-preview";
export function CommentList({ comments }) {
    // console.log('comments', comments)

    // if (!comments || comments.length === 0) return <p>No comments yet</p>
    return (
        <ul className="comment-list clean-list">
            {comments.map(comment =>
                <li className="comment-preview column" key={comment._id} >
                    <CommentPreview comment={comment} />
                </li>
            )}

        </ul>
    )
}