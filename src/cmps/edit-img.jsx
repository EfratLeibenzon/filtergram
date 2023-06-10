// import { blackwhite } from "@cloudinary/url-gen/actions/effect"

import { useState } from "react"

export function EditImg({ imgUrl, setStage }) {
    const [currStyle, setCurrStyle] = useState({ filter: 'none' })

    function onSetStyle(currFilter) {
        setCurrStyle({ filter: currFilter })
        console.log('currStyle', currStyle)
    }

    return (
        <div className="edit-img ">
            <header className="flex row">
                <span> Edit</span>
                <button onClick={() => setStage(3)}>next</button>
            </header>
            <main className="flex row">
                <section className="img-preview">
                    <img src={imgUrl} style={currStyle} />
                </section>
                <section className="img-editors flex column">
                    <p>Filters</p>
                    <section className="filter-btns">
                        <button className="filter-btn">
                            <img onClick={() => onSetStyle('none')} src="https://res.cloudinary.com/duxmabf4n/image/upload/v1686396746/vhq0nld9nnhfas7oyqiq.jpg" alt="" style={{ filter: 'none' }} />
                            <p>original</p>
                        </button>
                        <button className="filter-btn">
                            <img onClick={() => onSetStyle('grayscale(1)')} src="https://res.cloudinary.com/duxmabf4n/image/upload/v1686396746/vhq0nld9nnhfas7oyqiq.jpg" alt="" style={{ filter: 'grayscale(1)' }} />
                            <p>black&white</p>
                        </button>
                        <button className="filter-btn">
                            <img onClick={() => onSetStyle('sepia(0.7)')} src="https://res.cloudinary.com/duxmabf4n/image/upload/v1686396746/vhq0nld9nnhfas7oyqiq.jpg" alt="" style={{ filter: 'sepia(0.7)' }} />
                            <p>sepia</p>
                        </button>
                        <button className="filter-btn">
                            <img onClick={() => onSetStyle('saturate(2)')} src="https://res.cloudinary.com/duxmabf4n/image/upload/v1686396746/vhq0nld9nnhfas7oyqiq.jpg" alt="" style={{ filter: 'saturate(2)' }} />
                            <p>sepia</p>
                        </button>
                    </section>
                </section>

            </main>
        </div>
    )
}