import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStorys, removeStory } from '../store/story.actions'
import { StoryList } from '../cmps/story-list'
import { StoryEdit } from '../cmps/story-edit'
import { Suggested } from '../cmps/suggested'

export function HomeIndex({ setIsStoryDetailsOpen, isStoryDetailsOpen }) {
    const { storys } = useSelector((storeState) => storeState.storyModule)

    useEffect(() => {
        loadStorys()
        console.log(storys)
    }, [])

    async function onRemoveStory(storyId) {
        try {
            await removeStory(storyId)
            console.log('story with id', storyId, ' has removed')
        } catch (err) {
            console.log('cannot remove story with id', storyId, err)
        }
    }

    return (
        <section>
            <div className='home-index flex'>
                <section className='story-container'>
                    <StoryList storys={storys} onRemoveStory={onRemoveStory} setIsStoryDetailsOpen={setIsStoryDetailsOpen} isStoryDetailsOpen={isStoryDetailsOpen} />
                </section>
                <Suggested />
            </div>
        </section>
    )
}