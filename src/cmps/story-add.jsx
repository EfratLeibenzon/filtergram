import { useState } from "react"
import { storyService } from "../services/story.service.local"
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';

export function StoryAdd() {
    const [storyToEdit, setStoryToEdit] = useState(storyService.getEmptyStory())
    const myImage = new CloudinaryImage('sample', { cloudName: 'duxmabf4n' }).resize(fill().width(100).height(150))

    function handleChange({ target }) {
        console.log(target.files)
        setStoryToEdit({ ...storyToEdit, imgUrl: target.value })
    }



    return (
        <div>
            <AdvancedImage cldImg={myImage} />
        </div>
    )

    function AdvancedImage(cldImg) {
        return <img src={cldImg} alt="" />
    }

    return (
        <div className="story-add">
            {!storyToEdit.imgUrl && (
                <section className="img-loader">
                    <input onChange={handleChange} type="file" id="file-input" name="ImageStyle" />
                </section>)}
            {storyToEdit.imgUrl && (
                <section className="img-to-edit">
                    <img src={storyToEdit.imgUrl} alt="" />
                </section>)}
        </div>



    )
}