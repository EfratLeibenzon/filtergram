import React from 'react'
import { useState } from "react"
import { storyService } from "../services/story.service.local"
import { AdvancedImage } from '@cloudinary/react'
import { fill } from "@cloudinary/url-gen/actions/resize"
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen'

import { UploadWidget } from "./upload-widget"
import { useSelector } from 'react-redux'

export function StoryAdd() {
    const { imgPath } = useSelector((storeState) => storeState.storyModule)
    //     // const [storyToEdit, setStoryToEdit] = useState(storyService.getEmptyStory())
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'duxmabf4n'
        }
    });

    const myImage = cld.image(imgPath)
    myImage.resize(fill().width(400).height(400))
    //     console.log(myImage)
    //     // function handleChange({ target }) {
    //     //     console.log(target.files)
    //     //     setStoryToEdit({ ...storyToEdit, imgUrl: target.value })
    //     // }



    return (

        <div className="user-story">

            <AdvancedImage cldImg={myImage} />

        </div>

    )



    /////////////////////////////////////////////    

    // "https://res.cloudinary.com/duxmabf4n/image/upload/v1685811634/an1dequb3e0efxnakcv6.png"

    // const myImage = new CloudinaryImage('userStory', {cloudName: 'duxmabf4n'}).resize(fill().width(100).height(150));



    //   return (
    //     <div>
    //       <AdvancedImage cldImg={myImage} />
    //     </div>
    //   )


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
<<<<<<< HEAD
}
=======
}
>>>>>>> 3920c144bdb1dba2faa0940201c40bc3aaaff847
