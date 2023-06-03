export const SET_STORYS = 'SET_STORYS'
export const REMOVE_STORY = 'REMOVE_STORY'
export const ADD_STORY = 'ADD_STORY'
export const UPDATE_STORY = 'UPDATE_STORY'
export const SET_STORY = 'SET_STORY'
export const CEAR_STORY = 'CEAR_STORY'


const initialState = {
    storys: [],
    story: null,
}

export function storyReducer(state = initialState, action) {
    var newState = state
    var storys
    switch (action.type) {
        case CEAR_STORY:
            newState = { ...state, story: action.null }
            break
        case SET_STORY:
            newState = { ...state, story: action.story }
            break
        case SET_STORYS:
            newState = { ...state, storys: action.storys }
            break
        case REMOVE_STORY:
            storys = state.storys.filter(story => story._id !== action.storyId)
            newState = { ...state, storys }
            break
        case ADD_STORY:
            newState = { ...state, storys: [...state.storys, action.story] }
            break
        case UPDATE_STORY:
            storys = state.storys.map(story => (story._id === action.story._id) ? action.story : story)
            newState = { ...state, storys }
            break
        default:

    }
    return newState
}
