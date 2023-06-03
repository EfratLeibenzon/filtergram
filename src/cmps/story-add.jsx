// import { useState } from "react"
// import { storyService } from "../services/story.service.local"
// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { CloudinaryImage } from '@cloudinary/url-gen';

<<<<<<< HEAD
export function StoryAdd() {
    const [storyToEdit, setStoryToEdit] = useState(storyService.getEmptyStory())
    const myImage = new CloudinaryImage('sample', { cloudName: 'duxmabf4n' }).resize(fill().width(100).height(150))

    function handleChange({ target }) {
        console.log(target.files)
        setStoryToEdit({ ...storyToEdit, imgUrl: target.value })
    }
=======
// export function StoryAdd() {
//     // const [storyToEdit, setStoryToEdit] = useState(storyService.getEmptyStory())
//     const myImage = new CloudinaryImage('sample', { cloudName: 'duxmabf4n' }).resize(fill().width(100).height(150))
//     console.log(myImage)
//     // function handleChange({ target }) {
//     //     console.log(target.files)
//     //     setStoryToEdit({ ...storyToEdit, imgUrl: target.value })
//     // }
>>>>>>> 4d8257b891ddd187e82c688851559e02e0189bbf



//     return (
//         <div>
//             {/* <AdvancedImage cldImg={myImage} /> */}
//         </div>
//     )

<<<<<<< HEAD
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
=======

//     function AdvancedImage(cldImg) {
//         // <img src={cldImg} alt="" />
//         console.log(cldImg)
//     }
//     // return (
//     // <div className="story-add">
//     //     {!storyToEdit.imgUrl && (
//     //         <section className="img-loader">
//     //             <input onChange={handleChange} type="file" id="file-input" name="ImageStyle" />
//     //         </section>)}
//     //     {storyToEdit.imgUrl && (
//     //         <section className="img-to-edit">
//     //             <img src={storyToEdit.imgUrl} alt="" />
//     //         </section>)}
//     // </div>



//     // )
// }
>>>>>>> 4d8257b891ddd187e82c688851559e02e0189bbf
