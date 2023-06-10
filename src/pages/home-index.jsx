import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadStories, removeStory } from '../store/story.actions'
import { StoryList } from '../cmps/story-list'
import { StoryEdit } from '../cmps/story-edit'
import { Suggested } from '../cmps/suggested'

<<<<<<< HEAD

=======
// export function HomeIndex({ setIsStoryDetailsOpen, isStoryDetailsOpen }) {
// const { storys } = useSelector((storeState) => storeState.storyModule)
>>>>>>> 2d3fd15882935bc730f5d2943282a3c93597f286
export function HomeIndex() {
    const { stories } = useSelector((storeState) => storeState.storyModule)

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
                    <StoryList stories={stories} onRemoveStory={onRemoveStory} />
                </section>
=======
                    {/* <StoryList storys={storys} onRemoveStory={onRemoveStory} setIsStoryDetailsOpen={setIsStoryDetailsOpen} isStoryDetailsOpen={isStoryDetailsOpen} /> */}
                    <StoryList stories={stories} onRemoveStory={onRemoveStory} />
                </section >
>>>>>>> 2d3fd15882935bc730f5d2943282a3c93597f286
                <Suggested />
            </div >
        </section >
    )
}