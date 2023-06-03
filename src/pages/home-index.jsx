import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStorys, removeStory } from '../store/story.actions'
import { StoryList } from '../cmps/story-list'
import { StoryAdd } from '../cmps/story-add'
import { UploadWidget } from '../cmps/upload-widget'

export function HomeIndex() {
    const [isAdd, setIsAdd] = useState(false)

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
        setIsAdd(true)
    }

    return (
        <section>
            <img src="https://res.cloudinary.com/duxmabf4n/image/upload/v1685811634/an1dequb3e0efxnakcv6.png" alt="" />
            {/* <button onClick={onAddStory}>add Post</button> */}
            <div className='home-index'>
                <h3>hello from home page</h3>
                <StoryAdd />
                {/* {storyToEdit && <StoryEdit />} */}
                {/* {isAdd && <UploadWidget />} */}
                <UploadWidget />
                <StoryList storys={storys} onRemoveStory={onRemoveStory} />
            </div></section>
    )
}