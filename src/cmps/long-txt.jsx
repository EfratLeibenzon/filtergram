import { useEffect, useState } from "react"


export function LongTxt({ txt = 'test', length }) {

    const [isMore, setIsMore] = useState(false)
    const [isShort, setIsShort] = useState(null)

    useEffect(() => {
        setIsShort(txt.length < 119)
    }, [])

    function BtnToggle() {
        setIsMore((prevIsMore) => !prevIsMore)
    }


    return (
        <section className="description-container">

            {!isMore && <p>{txt.substring(0, length)}</p>}
            {isMore && <p>{txt}</p>}
            {!isShort && <article>
                {!isMore && <button onClick={BtnToggle}>Read More</button>}
                {isMore && <button onClick={BtnToggle}>Read Less</button>}
            </article>}

        </section>
    )
}