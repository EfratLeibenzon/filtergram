
import { storageService } from './async-storage.service.js'
import { stories, users } from './demo-data.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'userDB'

let gUsers
_createUsers()

export const userService = {
    query,
    getById,
    save,
    remove,
    getEmptyUser,
    queryComments,
    getCommentById,
    getEmptyComment

}
window.cs = userService


async function query() {
    var users = await storageService.query(STORAGE_KEY)

    return users
}

function getById(userId) {
    return storageService.get(STORAGE_KEY, userId)
}

async function remove(userId) {
    await storageService.remove(STORAGE_KEY, userId)
}

async function save(user) {
    var savedUser
    if (user._id) {
        savedUser = await storageService.put(STORAGE_KEY, user)
    } else {
        savedUser = await storageService.post(STORAGE_KEY, user)
    }
    return savedUser
}

function getEmptyUser() {
    return {
        txt: "",
        imgUrl: "",
        by: users[0],
        loc: {},
        comments: [],
        likedBy: [],
        tags: []
    }
}

function queryComments(userId) {
    let user = getById(userId)
    return user.comments
}

function getCommentById(userId, commentId) {
    const comments = queryComments(userId)
    return comments.filter(comment => comment._id === commentId)
}

function getEmptyComment() {
    return {
        by: users[0],
        txt: "",
        likedBy: []
    }
}


////////////////////

function _createUsers() {
    gUsers = utilService.loadFromStorage(STORAGE_KEY)
    if (gUsers && gUsers.length > 0) return
    gUsers = stories
    _saveUsers()
}

function _saveUsers() {
    utilService.saveToStorage(STORAGE_KEY, gUsers)
}



