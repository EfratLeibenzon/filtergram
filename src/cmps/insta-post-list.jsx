import { InstaPostPreview } from "./insta-post-preview";

export function InstaPostList({ instaPosts, onRemoveInstaPost }) {


    return (
        <ul className="insta-post-list">
            {instaPosts.map(instaPost =>
                <li className="insta-post-preview" key={instaPost._id}>
                    <InstaPostPreview instaPost={instaPost} />
                    <div>
                        <button className="remove-btn" onClick={() => { onRemoveInstaPost(instaPost._id) }}>Remove</button>
                    </div>

                </li>
            )}

        </ul>
    )
}