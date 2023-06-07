import { CommentPreview } from "./comment-preview";
export function CommentList({ comments }) {

    return (
        <ul className="comment-list clean-list">
            {comments.map(comment =>
                <li className="comment-preview column" key={comment._id}>
                    <CommentPreview comment={comment} />
                </li>
            )}

        </ul>
    )
}