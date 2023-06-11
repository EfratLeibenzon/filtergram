
import { storageService } from './async-storage.service.js'
import { users } from './demo-data.js'
import { utilService } from './util.service.js'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_USERS = 'users'
const STORAGE_KEY_GUEST = 'guest'

// const STORAGE_KEY = 'userDB'

_createUsers()
_createGuest()

export const userService = {
    login,
    logout,
    signup,
    query,
    getById,
    // save,
    remove,
    getLoggedinUser,
    getEmptyUser,
    getUsers,
    queryComments,
    getCommentById,
    getEmptyCredentials,
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
    const user = users.find(user => user.userName === userCred.userName)
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

function signup(user) {
    // const user = { username, password, fullname, activities: [] }
    return storageService.post(STORAGE_KEY_USERS, user)
        .then(_setLoggedinUser)
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

// async function save(user) {
//     var savedUser
//     if (user._id) {
//         savedUser = await storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
//     } else {
//         savedUser = await storageService.post(STORAGE_KEY_LOGGEDIN_USER, user)
//     }
//     return savedUser
// }

function getLoggedinUser() {
    // const user = JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
    // return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function getEmptyUser() {
    return {
        _id: "",
        fullName: "",
        userName: "",
        password: "",
        mail: '', //not in the starter
        userBio: '', //not in the starter
        userImg: { url: '', style: { filter: 'none' } },
        followingId: [], //provided in the starter as: following
        followersId: [], //provided in the starter as: followers
        following: [
        ],
        followers: [
        ],
        savedStories: [], //provided in the starter as savedStoryIds
        taggedStories: [], //not in the starter
        userStories: [] //not in the starter
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

function getEmptyCredentials() {
    return {
        userName: '',
        password: '',
        fullname: ''
    }
}


////////////////////

function _createUsers() {
    const storedUsers = utilService.loadFromStorage(STORAGE_KEY_LOGGEDIN_USER)
    if (storedUsers?.length > 0) {
        return
    }
    _saveUsers(STORAGE_KEY_USERS, users)
}

function _createGuest() {
    const storedGuest = utilService.loadFromStorage(STORAGE_KEY_GUEST)
    if (storedGuest?.length > 0) {
        return
    }
    const guestUser = users.filter((u) => u._id === 'Guest')
    _saveUsers(STORAGE_KEY_LOGGEDIN_USER, guestUser)
}

function _saveUsers(userType, users) {
    utilService.saveToStorage(userType, users)
}

function _setLoggedinUser(user) {
    storageService.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    .then(remove(STORAGE_KEY_LOGGEDIN_USER, user._id))
    return user
}

