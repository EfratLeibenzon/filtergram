
import { storageService } from './async-storage.service.js'
import { stories, users } from './demo-data.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'story'

let gStorys
_createStorys()

export const storyService = {
    query,
    getById,
    save,
    remove,
    getEmptyStory,
    queryComments,
    getCommentById,
    getEmptyComment

}
window.cs = storyService


async function query() { // filterBy = { by: '', tags: [] }
    var storys = await storageService.query(STORAGE_KEY)
    return storys
}

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function remove(storyId) {
    await storageService.remove(STORAGE_KEY, storyId)
}

async function save(story) {
    var savedStory
    if (story._id) {
        savedStory = await storageService.put(STORAGE_KEY, story)
    } else {
        savedStory = await storageService.post(STORAGE_KEY, story)
    }
    return savedStory
}

function getEmptyStory() {
    return {
        txt: "",
        imgUrl: "",
        by: users[0],
        loc: {},
        comments: [],
        tags: []
    }
}

function queryComments(storyId) {
    let story = getById(storyId)
    return story.comments
}

function getCommentById(storyId, commentId) {
    const comments = queryComments(storyId)
    return comments.filter(comment => comment._id === commentId)
}

// async function savecomment(comment) {
//     var savedComment
//     if (comment._id) savedComment = await storageService.put(STORAGE_KEY, comment)
//     else savedComment = await storageService.post(STORAGE_KEY, comment)
//     return savedComment
// }

// async function removecomment(commentId) {
//     await storageService.remove(STORAGE_KEY, commentId)
// }

function getEmptyComment() {
    return {
        by: users[0],
        txt: "",
        likedBy: []
    }
}


////////////////////

function _createStorys() {
    gStorys = utilService.loadFromStorage(STORAGE_KEY)
    if (gStorys && gStorys.length > 0) return
    gStorys = stories
    _saveStorys()
}

function _saveStorys() {
    utilService.saveToStorage(STORAGE_KEY, gStorys)
}



