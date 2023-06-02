import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadStorys, removeStory } from '../store/story.actions'
import { StoryList } from '../cmps/story-list'
import { StoryAdd } from '../cmps/story-add'

export function HomeIndex() {

    const { storys } = useSelector((storeState) => storeState.storyModule)

    useEffect(() => {
        loadStorys()
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

    function onAddStory() {
        StoryAdd()
    }

    return (
        <section>
            <button onClick={onAddStory}>add Post</button>
            <div className='home-index'>
                <h3>hello from home page</h3>
                {/* {storyToEdit && <StoryEdit />} */}
                <StoryList storys={storys} onRemoveStory={onRemoveStory} />
            </div></section>
    )
}