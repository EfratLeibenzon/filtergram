
export function CreateStoryTitle({ storyToEdit, onSaveStory }) {

    function handleChange({ target }) {
        storyToEdit.current.txt = target.value
    }

    function onSubmitTitle(ev) {
        ev.preventDefault()
        onSaveStory()
    }

    return (
        <div className="edit-story-title flex column">
            <header>
                <p>Create new post</p>
                <button onClick={onSubmitTitle}>Share</button>
            </header>
            <main className="flex row">
                <section id="img-preview2" className="img-preview">
                    <img src={storyToEdit.current.img.url} style={storyToEdit.current.img.style} alt="" />
                </section>
                <section className="edit-story-form">
                    <img className="mini-user-img" src={storyToEdit.current.by.userImg.url} style={storyToEdit.current.by.userImg.style} />
                    <p>{storyToEdit.current.by.userName}</p>
                    <input className="texterea" onChange={handleChange} type="texterea" name="txt" placeholder="Write a caption..." />

                    <span id="span"></span>
                </section>
            </main>
        </div>
    )
}
