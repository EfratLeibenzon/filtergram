import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadComment, removeComment } from '../store/comment.actions'

export function CommentIndex() {
    const { comments } = useSelector((storeState) => storeState.commentModule)

    useEffect(() => {
        loadComment()
    }, [])

    function onRemoveComment(commentId) {
        removeComment(commentId)
            .then(() => {
                console.log('comment with id', commentId, ' has removed')
            })
            .catch((err) => {
                console.log('cannot remove comment with id', commentId, err)
            })
    }


    // function onAddComent() {
    //     let comment = commentsService.getEmptyComment()
    //     comment.txt = prompt('Add your Comment:')


    // }



    return (
        <section></section>
    )
}