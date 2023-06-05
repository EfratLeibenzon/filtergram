import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStorys, removeStory } from '../store/story.actions'
import { StoryList } from '../cmps/story-list'
import { StoryEdit } from '../cmps/story-edit'


export function HomeIndex() {
    const { storys } = useSelector((storeState) => storeState.storyModule)

    useEffect(() => {
        loadStorys()
        console.log(storys)
    }, [])

    async function onRemoveStory(storyId) {
        try {
            await removeStory(storyId)
            console.log('story with id', storyId, ' has removed')
            // showSuccessMsg(`Story (id: ${storyId}) removed `)
        } catch (err) {
            console.log('cannot remove story with id', storyId, err)
            // showErrorMsg('Cannot remove story')
        }
    }

    return (
        <section>
            <div className='home-index'>
                <StoryList storys={storys} onRemoveStory={onRemoveStory} />
            </div>
        </section>
    )
}