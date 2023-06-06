import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStorys, removeStory } from '../store/story.actions'
import { StoryList } from '../cmps/story-list'
import { StoryEdit } from '../cmps/story-edit'
import { Suggested } from '../cmps/suggested'
import { storyService } from '../services/story.service.local'


export function HomeIndex() {
    const { storys } = useSelector((storeState) => storeState.storyModule)
    const [storyToAdd, setStoryToAdd] = useState(null)

    useEffect(() => {
        loadStorys()
        console.log(storys)
    }, [])

    function onAddStory() {
        const story = storyService.getEmptyStory()
        setStoryToAdd(story)
    }


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
            {storyToAdd && <StoryEdit />}
            <div className='home-index flex'>
                <section className='story-container'>

                    <StoryList storys={storys} onRemoveStory={onRemoveStory} />
                </section>
                <Suggested />
            </div>
        </section>
    )
}