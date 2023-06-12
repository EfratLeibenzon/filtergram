import { userService } from "../services/user.service.js";
import { socketService } from "../services/socket.service.js";
import { store } from '../store/store.js'

import { showErrorMsg } from '../services/event-bus.service.js'
import { LOADING_DONE, LOADING_START } from "./system.reducer.js";
import { REMOVE_USER, SET_USER, SET_USERS, SET_WATCHED_USER, ADD_USER } from "./user.reducer.js";

export async function loadUsers() {
    try {
        store.dispatch({ type: LOADING_START })
        const users = await userService.query()
        store.dispatch({ type: SET_USERS, users })
    } catch (err) {
        console.log('UserActions: err in loadUsers', err)
    } finally {
        store.dispatch({ type: LOADING_DONE })
    }
}

export async function removeUser(userId) {
    try {
        await userService.remove(userId)
        store.dispatch({ type: REMOVE_USER, userId })
    } catch (err) {
        console.log('UserActions: err in removeUser', err)
    }
}


export async function onAddUser(user) {
    try {
        const savedUser = await userService.saveUser(user)
        store.dispatch({
            type: ADD_USER,
            savedUser
        })
        return savedUser
    } catch (err) {
        console.log('Cannot add user', err)
        throw err
    }
}

export async function login(user) {
    try {
        const loggedInUser = await userService.login(user)
        console.log('from actions', loggedInUser)
        store.dispatch({
            type: SET_USER,
            loggedInUser
        })
        // socketService.login(user)
        return loggedInUser
    } catch (err) {
        console.log('Cannot login', err)
        throw err
    }
}

export async function signup(user) {
    try {
        const loggedInUser = await userService.signup(user)
        store.dispatch({
            type: SET_USER,
            loggedInUser
        })
        // socketService.login(user)
        return user
    } catch (err) {
        console.log('Cannot signup', err)
        throw err
    }
}

export async function logout() {
    try {
        await userService.logout()
        store.dispatch({
            type: SET_USER,
            loggedInUser: null
        })
        socketService.logout()
    } catch (err) {
        console.log('Cannot logout', err)
        throw err
    }
}

export async function loadUser(userId) {
    try {
        const user = await userService.getById(userId);
        store.dispatch({ type: SET_WATCHED_USER, user })
    } catch (err) {
        showErrorMsg('Cannot load user')
        console.log('Cannot load user', err)
    }
}

// export function isGuest(userId) {
//     const isGuestUser = user._id === 'Guest' ? true : false
//     if (isGuestUser) store.dispatch({ type: SET_WATCHED_USER, userId })
// }

