export const GET_COMMENTS = 'GET_COMMENTS'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'

const initialState = {
    comments: [],
}

export function commentReducer(state = initialState, action) {
    var newState = state
    var comments
    switch (action.type) {
        case GET_COMMENTS:
            newState = { ...state, comments: action.comments }
            break
        case REMOVE_COMMENT:
            comments = state.comments.filter(comment => comment._id !== action.commentId)
            newState = { ...state, comments }
            break
        case ADD_COMMENT:
            newState = { ...state, comments: [...state.comments, action.comment] }
            break
        default:

    }
    return newState
}
