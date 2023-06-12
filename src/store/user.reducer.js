import { userService } from '../services/user.service.js'

export const SET_USER = 'SET_USER'
export const ADD_USER = 'ADD_USER'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USERS = 'SET_USERS'
export const SET_SCORE = 'SET_SCORE'
// export const GET_LOGGED_IN_USER = 'GET_LOGGED_IN_USER'
// export const SET_GUEST_USER = 'SET_GUEST_USER'

const initialState = {
    loggedInUser: userService.getLoggedinUser(),
    users: [],
    // isGuest: true,
    // watchedUser : null
}

export function userReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_USER:
            newState = { ...state, loggedInUser: action.loggedInUser }
            break
        // case SET_WATCHED_USER:
        //     newState = { ...state, watchedUser: action.user }
        //     break
        case REMOVE_USER:
            newState = {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
            break
        case SET_USERS:
            newState = { ...state, users: action.users }
            break
        case ADD_USER:
            newState={...state, users:[...state.users, action.loggedInUser]}
            break
        default:
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState

}
