import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { storyService } from "../services/story.service.local"
import { updateStory } from "../store/story.actions"


export function CommentAdd({ story }) {
    // const [commentToAdd, setcommentToAdd] = useState(storyService.getEmptyComment())
    let newComment = useRef(storyService.getEmptyComment())
    console.log('new render', newComment.current)

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
        newComment.current = { ...newComment.current, txt: target.value }

    }

    async function onSaveComment(ev) {
        ev.preventDefault()
        if (!newComment.current.txt) return
        newComment.current = { ...newComment.current, CreatedAt: Date.now() }
        story.comments.push(newComment.current)
        try {
            const savedStory = await updateStory(story)
            console.log('savedStory', savedStory)
        }
        catch (err) {
            console.log('cant add comment', err)
        }
        finally {
            newComment.current = storyService.getEmptyComment()
            ev.target.comment.value = ''
        }
    }



    return (
        <form onSubmit={onSaveComment}>
            <input onChange={handleChange} type="text" name="comment" placeholder="Add a comment..." value={newComment.txt} />
            <button>Post</button>
        </form>
    )
}