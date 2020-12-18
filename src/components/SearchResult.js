import React from 'react'

const SearchResult = props => {

    return (
         props.data.map((d, index) => {
            return (
                <a key={`image-${d.id}`} className="ui raised card" rel="noreferrer" target="_blank" href={d.links.download}>
                    <div className="image">
                        <img alt={d.alt_description} src={d.urls.small} />
                    </div>
                </a>
            )
        })
    )
}

SearchResult.defaultProps = {
    data: []
}

export default SearchResult