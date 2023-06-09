
export function CreateStoryTitle({ storyToEdit, onSaveStory }) {
    let title = ''

    function handleChange({ target }) {
        title = target.value
    }

    function onSubmitTitle(ev) {
        ev.preventDefault()
        // setStoryToEdit((prev) => ({ ...prev, txt: title }))
        onSaveStory(title)
    }

    return (
        <div className="edit-story-img">
            <section>
                <img src={storyToEdit.current.imgUrl} alt="" />
            </section>
            <section className="edit-story-form">
                <form onSubmit={onSubmitTitle}>
                    <label htmlFor="txt">
                        <input onChange={handleChange} type="text" name="txt" id="txt" placeholder="Write a caption..." />
                    </label>
                    <button>Post</button>
                </form>
            </section>
        </div>
    )
}
