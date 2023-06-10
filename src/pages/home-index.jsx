import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadStories, removeStory } from '../store/story.actions'
import { StoryList } from '../cmps/story-list'
import { StoryEdit } from '../cmps/story-edit'
import { Suggested } from '../cmps/suggested'

<<<<<<< HEAD
export function HomeIndex({ setIsStoryDetailsOpen, isStoryDetailsOpen }) {
    const { storys } = useSelector((storeState) => storeState.storyModule)
=======
export function HomeIndex() {
    const { stories } = useSelector((storeState) => storeState.storyModule)
>>>>>>> 628b0e0be2636ea62a54d11dfdb1d5356a4d0364

    useEffect(() => {
        loadStories()
        console.log(stories)
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
<<<<<<< HEAD
                    <StoryList storys={storys} onRemoveStory={onRemoveStory} setIsStoryDetailsOpen={setIsStoryDetailsOpen} isStoryDetailsOpen={isStoryDetailsOpen} />
=======
                    <StoryList stories={stories} onRemoveStory={onRemoveStory} />
>>>>>>> 628b0e0be2636ea62a54d11dfdb1d5356a4d0364
                </section>
                <Suggested />
            </div>
        </section>
    )
}