import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadInstaPosts } from "../store/instaPost.actions"


export function InstaPostList() {

    const { instaPosts } = useSelector((storeState) => storeState.instaPostModule)

    useEffect(() => {
        loadInstaPosts()
    }, [])

    return (
        <ul>

        </ul>)
}