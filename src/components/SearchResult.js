import React from 'react'

class SearchResult extends React.Component {

    render() {
        return (
            <div className="ui raised card">
                <div className="content">
                    <div className="header">Cute Dog</div>
                    <div className="meta">
                    <span className="category">Animals</span>
                    </div>
                    <div className="description">
                    <p></p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                        <img alt="" className="ui avatar image" src="https://i.pravatar.cc/300" /> Matt
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResult