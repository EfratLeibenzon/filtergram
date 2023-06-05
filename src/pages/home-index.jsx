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

    function onRemoveStory(storyId) {
        removeStory(storyId)
            .then(() => {
                console.log('story with id', storyId, ' has removed')
            })
            .catch((err) => {
                console.log('cannot remove story with id', storyId, err)
            })
    }


    return (
        <section>
            <div className='home-index'>
                <StoryList storys={storys} onRemoveStory={onRemoveStory} />
            </div>
        </section>
    )
}