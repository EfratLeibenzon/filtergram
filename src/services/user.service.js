
import { storageService } from './async-storage.service.js'
import { stories, users } from './demo-data.js'
import { utilService } from './util.service.js'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

// const STORAGE_KEY = 'userDB'

_createUsers()

export const userService = {
    login,
    logout,
    query,
    getById,
    save,
    remove,
    getLoggedinUser,
    getEmptyUser,
    getUsers,
    queryComments,
    getCommentById,
    getEmptyComment

}
window.cs = userService


function saveLocalUser(user) {
    // user = {_id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score}
    // sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    // return user
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}


async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    if (user) {
        return saveLocalUser(user)
    }
    // const user = await httpService.post('auth/login', userCred)
    // if (user) {
    //     socketService.login(user._id)
    //     return saveLocalUser(user)
    // }
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}


async function query() {
    var users = await storageService.query(STORAGE_KEY_LOGGEDIN_USER)

    return users
}

async function getUsers(filterBy = { txt: '' }) {
    // var users = await storageService.query('user').then(users => users)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     users = users.filter(user => {
    //         return regex.test(user.username)
    //     })
    //     // users = users.filter(user => regex.test(user.unername) || regex.test(car.description))
    // }
    // return users
    // console.log('get logged in user', storageService.query(STORAGE_KEY_LOGGEDIN_USER))
    return storageService.query(STORAGE_KEY_LOGGEDIN_USER)
    // return httpService.get(`user`)
}

function getById(userId) {
    return storageService.get(STORAGE_KEY_LOGGEDIN_USER, userId)
}

async function remove(userId) {
    await storageService.remove(STORAGE_KEY_LOGGEDIN_USER, userId)
}

async function save(user) {
    var savedUser
    if (user._id) {
        savedUser = await storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
    } else {
        savedUser = await storageService.post(STORAGE_KEY_LOGGEDIN_USER, user)
    }
    return savedUser
}

function getLoggedinUser() {
    // const user = JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
    // return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
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
    const storedUsers = utilService.loadFromStorage(STORAGE_KEY_LOGGEDIN_USER)
    if (storedUsers?.length > 0) {
        return
    }
    _saveUsers(users)
}

function _saveUsers(users) {
    utilService.saveToStorage(STORAGE_KEY_LOGGEDIN_USER, users)
}



