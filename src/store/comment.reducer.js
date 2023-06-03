export const SET_COMMENTS = 'SET_COMMENTS'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'


const initialState = {
    comments: [],
}

export function commentReducer(state = initialState, action) {
    var newState = state
    var comments
    switch (action.type) {
        case SET_COMMENTS:
            newState = { ...state, comments: action.comments }
            break
        case REMOVE_COMMENT:
            comments = state.comments.filter(comment => comment._id !== action.commentId)
            newState = { ...state, comments }
            break
        case ADD_COMMENT:
            newState = { ...state, comments: [...state.comments, action.comment] }
            break
        case UPDATE_COMMENT:
            comments = state.comments.map(comment => (comment._id === action.comment._id) ? action.comment : comment)
            newState = { ...state, comments }
            break
        default:

    }
    return newState
}
