export const SET_STORYS = 'SET_STORYS'
export const REMOVE_STORY = 'REMOVE_STORY'
export const ADD_STORY = 'ADD_STORY'
export const UPDATE_STORY = 'UPDATE_STORY'
export const ADD_COMMENT = 'ADD_COMMENT' // UPDATE_STORY?????
export const TOGGLE_LIKE = 'TOGGLE_LIKE'

const initialState = {
    storys: [],
}

export function storyReducer(state = initialState, action) {
    var newState = state
    var storys
    switch (action.type) {
        case SET_STORYS:
            newState = { ...state, storys: action.storys }
            break
        case REMOVE_STORY:
            storys = state.storys.filter(story => story._id !== action.storyId)
            newState = { ...state, storys }
            break
        case ADD_STORY:
            newState = { ...state, storys: [...storys, action.story] }
            break
        case UPDATE_STORY:
            storys = state.storys.map(story => (story._id === action.story._id) ? action.story : story)
            newState = { ...state, storys }
            break
        case TOGGLE_LIKE:
            const user = action.payload.user
            const story = action.payload.story
            // const storyId = action.payload.storyId
            const storyIndex = state.storys.findIndex((s) => s._id === story._id)
            const currentLikes = story.likedBy
            const isLiked = currentLikes.some((u) => u._id === user._id)
            const likedBy = isLiked ? currentLikes.filter((u) => u._id !== user._id) : [...currentLikes, user]
            const newStory = { ...story, likedBy }
            newState = {
                ...state,
                storys: [
                    ...state.storys.slice(0, storyIndex),
                    newStory,
                    ...state.storys.slice(storyIndex + 1)
                ]
            }
            break
        default:

    }
    return newState
}