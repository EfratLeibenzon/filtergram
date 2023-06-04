import { storyService } from "../services/story.service.local.js";
import { store } from './store.js'
import { ADD_STORY, REMOVE_STORY, SET_STORYS, UPDATE_STORY } from "./story.reducer.js";


// Action Creators:
export function getActionRemoveStory(storyId) {
    return {
        type: REMOVE_STORY,
        storyId
    }
}
export function getActionAddStory(story) {
    return {
        type: ADD_STORY,
        story
    }
}
export function getActionUpdateStory(story) {
    return {
        type: UPDATE_STORY,
        story
    }
}

export async function loadStorys() {
    try {
        const storys = await storyService.query()
        console.log('Storys from DB:', storys)
        store.dispatch({
            type: SET_STORYS,
            storys
        })

    } catch (err) {
        console.log('Cannot load storys', err)
        throw err
    }
}

export async function removeStory(storyId) {
    try {
        await storyService.remove(storyId)
        store.dispatch(getActionRemoveStory(storyId))
    } catch (err) {
        console.log('Cannot remove story', err)
        throw err
    }
}

export async function addStory(story) {
    try {
        const savedStory = await storyService.save(story)
        console.log('Added Story', savedStory)
        store.dispatch(getActionAddStory(savedStory))
        return savedStory
    } catch (err) {
        console.log('Cannot add story', err)
        throw err
    }
}

export function updateStory(story) {
    return storyService.save(story)
        .then(savedStory => {
            console.log('Updated Story:', savedStory)
            store.dispatch(getActionUpdateStory(savedStory))
            return savedStory
        })
        .catch(err => {
            console.log('Cannot save story', err)
            throw err
        })
}
