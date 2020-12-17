import React from 'react'

class SearchBar extends React.Component {

    state = { term: '' }
    
    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className={`ui icon input fluid ${this.props.searching ? 'loading' : ''}`}>
                        {/* <input type="text" placeholder="Search..." value={this.state.term} onChange={this.onInputChange} /> */}
                        <input type="text" placeholder="Search..." value={this.state.term} onChange={(e) => this.setState({ term: e.target.value }) } />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

SearchBar.defaultProps = {
    searching: false
}

export default SearchBar