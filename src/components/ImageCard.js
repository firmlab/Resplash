import React, {useRef, useEffect, useState} from 'react'

export default function ImageCard(props) {
    const {links, alt_description, urls} = props.image

    const imgRef = useRef(null)
    const [stateSpans, setStateSpans] = useState(0)

    const setSpans = () => {

        setTimeout(function() {
            const height = imgRef.current.clientHeight
            const spans = Math.ceil(height / 10)
            
            setStateSpans(spans)
        }, 500)
    }

    useEffect(() => {
        imgRef.current.addEventListener('load', setSpans)
    }, [])

    return (
        <a style={{gridRowEnd: `span ${stateSpans}`}} className="ui raised card" rel="noreferrer" target="_blank" href={links.download}>
            <div className="image">
                <img ref={imgRef} alt={alt_description} src={urls.small} />
            </div>
        </a>
    )
}