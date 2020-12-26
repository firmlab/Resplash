import React from 'react'
import ImageCard from './ImageCard'

const SearchResult = (props) => {

    return (
         props.data.map((d, index) => {
            return (
                <ImageCard onSelectedImage={(img) => { props.onSelectedImage(img) }} key={`image-list-${d.id}`} image={d} />
            )
        })
    )
}

SearchResult.defaultProps = {
    data: []
}

export default SearchResult