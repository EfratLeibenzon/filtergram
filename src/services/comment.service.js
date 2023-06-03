
import { storageService } from './async-storage.service.js'
import { storyService } from './story.service.local.js'

const STORAGE_KEY = 'commentsDB'

export const commentsService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,
}

async function query(storyId) {
    var comments = await storageService.query(STORAGE_KEY)
    if (storyId) {
        comments = storyService.getById(storyId).comments
    }
    return comments
}

function getById(commentId) {
    return storageService.get(STORAGE_KEY, commentId)
}

async function save(comment) {
    var savedComment
    if (comment._id) savedComment = await storageService.put(STORAGE_KEY, comment)
    else savedComment = await storageService.post(STORAGE_KEY, comment)
    return savedComment
}

async function remove(commentId) {
    await storageService.remove(STORAGE_KEY, commentId)
}

function getEmptyComment() {
    return {
        by: {
            _id: "u101",
            fullname: "Ulash Ulashi",
            imgUrl: `https://robohash.org/"u101".png?set=any&?size=100x100`
        },
        txt: "",
        likedBy: []
    }
}

