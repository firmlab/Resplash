import React from 'react'

import {debounce} from 'lodash'

class SearchBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = { term: '' }

        this.changeSearch = debounce(this.props.onSubmit, 500)
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value }, () => {
            this.changeSearch(e.target.value)
        })
    }

    render() {
        return (
            <div>
                <div className={`ui icon input fluid ${this.props.searching ? 'loading' : ''}`}>
                    {/* <input type="text" placeholder="Search..." value={this.state.term} onChange={this.onInputChange} /> */}
                    <input type="text" placeholder="Search..." value={this.state.term} onChange={this.onInputChange} />
                    <i className="search icon"></i>
                </div>
            </div>
        )
    }
}

SearchBar.defaultProps = {
    searching: false
}

export default SearchBar