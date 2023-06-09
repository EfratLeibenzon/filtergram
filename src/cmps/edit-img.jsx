// import { blackwhite } from "@cloudinary/url-gen/actions/effect"

import { useState } from "react"

export function EditImg({ imgUrl, setStage }) {
    const [currStyle, setCurrStyle] = useState({ filter: 'none' })

    function onSetStyle(currFilter) {
        setCurrStyle({ filter: currFilter })
        console.log('currStyle', currStyle)
    }

    return (
        <div className="edit-img flex row">
            <section className="img-preview">
                <img src={imgUrl} style={currStyle} />
            </section>
            <section className="img-editors">
                <img onClick={() => onSetStyle('filter name')} src='https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg' alt="" />
            </section>
            <button onClick={() => setStage(3)}></button>
        </div>
    )
}