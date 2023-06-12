
export function CreateStoryTitle({ storyToEdit, onSaveStory }) {
    let title = ''

    function handleChange({ target }) {
        title = target.value
    }

    function onSubmitTitle(ev) {
        ev.preventDefault()
        onSaveStory(title)
    }

    return (
        <div className="edit-story-title flex column">
            <header>
                Create new post
            </header>
            <main className="flex row">
                <section id="img-preview2" className="img-preview">
                    <img src={storyToEdit.current.img.url} style={storyToEdit.current.img.style} alt="" />
                </section>
                <section className="edit-story-form">
                    <form className="flex column space-between" onSubmit={onSubmitTitle}>
                        <label htmlFor="txt">
                            <input onChange={handleChange} type="text" name="txt" id="txt" placeholder="Write a caption..." />
                        </label>
                        <span id="span"></span>
                        <button>Share</button>
                    </form>
                </section>
            </main>
        </div>
    )
}
