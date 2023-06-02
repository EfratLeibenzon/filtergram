import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadInstaPosts, removeInstaPost } from '../store/instaPost.actions'
import { InstaPostList } from '../cmps/insta-post-list'
import { AddInstaPost } from '../cmps/add-insta-post'

export function HomeIndex() {

    const { instaPosts } = useSelector((storeState) => storeState.instaPostModule)

    useEffect(() => {
        loadInstaPosts()
    }, [])

    function onRemoveInstaPost(instaPostId) {
        removeInstaPost(instaPostId)
            .then(() => {
                console.log('insta post with id', instaPostId, ' has removed')
            })
            .catch((err) => {
                console.log('cannot remove insta post with id', instaPostId, err)
            })
    }

    function onAddInstaPost() {
        AddInstaPost()
    }

    return (
        <section>
            <button onClick={onAddInstaPost}>add Post</button>
            <div className='home-index'>
                <h3>hello from home page</h3>
                {/* {instaPostToEdit && <InstaPostEdit />} */}
                <InstaPostList instaPosts={instaPosts} onRemoveInstaPost={onRemoveInstaPost} />
            </div></section>
    )
}