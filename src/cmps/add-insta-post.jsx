import { useState } from "react"
import { instaPostService } from "../services/instaPost.service.local"

export function AddInstaPost() {
    const [instaPostToEdit, setInstaPostToEdit] = useState(instaPostService.getEmptyInstaPost())



    return (
        <div className="add-insta-post">
            {console.log('hi from add post')}
        </div>
    )
}