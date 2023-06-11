
import { storageService } from './async-storage.service.js'
import { stories, users } from './demo-data.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'story'

let gStories
_createStories()

export const storyService = {
    query,
    getById,
    save,
    remove,
    getEmptyStory,
    queryComments,
    getCommentById,
    getEmptyComment,
    saveToggleLike,

}
window.cs = storyService


async function query() { // filterBy = { by: '', tags: [] }
    var stories = await storageService.query(STORAGE_KEY)
    stories.sort((s1, s2) => s2.createdAt - s1.createdAt)
    return stories
}

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function saveToggleLike(story, user) {
    // check inside the story if I am there. If not add the id, if yes then remove
    const isLiked = story.likedBy.some((s) => s._id === story._id)
    const stories = utilService.loadFromStorage(STORAGE_KEY)
    const storyIndex = stories.findIndex((s) => s._id === story._id)
    const likedBy = isLiked ? story.likedBy.filter((u) => u._id !== user._id) : [...story.likedBy, user]
    const newStory = { ...story, likedBy }
    const newStories = [
        ...stories.slice(0, storyIndex),
        newStory,
        ...stories.slice(storyIndex + 1)
    ]
    utilService.saveToStorage(STORAGE_KEY, newStories)
    return newStories
    // console.log('ssssssss', storyId)
    // console.log('userrrr', user)
    // var story = await storageService.put(STORAGE_KEY, story)
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
        txt: '',
        createdAt: null,
        img: { url: '', style: { filter: 'none' } },
        by: users[0],
        loc: {},
        taggedUsers: [],
        comments: [],
        likedBy: [],
        hashTags: []
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
        _id: utilService.makeId(12),
        by: users[0],
        txt: "",
        likedBy: []
    }
}


////////////////////

function _createStories() {
    gStories = utilService.loadFromStorage(STORAGE_KEY)
    if (gStories && gStories.length > 0) return
    gStories = stories
    _saveStories()
}

function _saveStories() {
    utilService.saveToStorage(STORAGE_KEY, gStories)
}



