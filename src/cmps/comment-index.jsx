import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { storyService } from "../services/story.service.local"
import { updateStory } from "../store/story.actions"


export function CommentIndex({ story }) {
    const [commentToAdd, setcommentToAdd] = useState(storyService.getEmptyComment())

    // function onRemoveComment(commentId, story._id) {
    //     removeComment(commentId)
    //         .then(() => {
    //             console.log('comment with id', commentId, ' has removed')
    //         })
    //         .catch((err) => {
    //             console.log('cannot remove comment with id', commentId, err)
    //         })
    // }


    function handleChange({ target }) {
        setcommentToAdd({ ...commentToAdd, txt: target.value })
        console.log(commentToAdd)
    }

    async function onSaveComment(ev) {
        ev.preventDefault()
        setcommentToAdd({ ...commentToAdd, CreatedAt: Date.now() })
        story.comments.push(commentToAdd)
        console.log(ev.target)
        try {
            const savedStory = await updateStory(story)
            console.log('savedStory', savedStory)
        }
        catch (err) {
            console.log('cant add comment', err)
        }
    }



    return (
        <form onSubmit={onSaveComment}>
            <input onChange={handleChange} type="text" name="comment" placeholder="Add a comment..." />
            <button>Post</button>
        </form>
    )
}