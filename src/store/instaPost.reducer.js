export const SET_INSTAPOSTS = 'SET_INSTAPOSTS'
export const REMOVE_INSTAPOST = 'REMOVE_INSTAPOST'
export const ADD_INSTAPOST = 'ADD_INSTAPOST'
export const UPDATE_INSTAPOST = 'UPDATE_INSTAPOST'


const initialState = {
    instaPosts: [],
}

export function instaPostReducer(state = initialState, action) {
    var newState = state
    var instaPosts
    switch (action.type) {
        case SET_INSTAPOSTS:
            newState = { ...state, instaPosts: action.instaPosts }
            break
        case REMOVE_INSTAPOST:
            instaPosts = state.instaPosts.filter(instaPost => instaPost._id !== action.instaPostId)
            newState = { ...state, instaPosts }
            break
        case ADD_INSTAPOST:
            newState = { ...state, instaPosts: [...state.instaPosts, action.instaPost] }
            break
        case UPDATE_INSTAPOST:
            instaPosts = state.instaPosts.map(instaPost => (instaPost._id === action.instaPost._id) ? action.instaPost : instaPost)
            newState = { ...state, instaPosts }
            break

    }
    return newState
}
