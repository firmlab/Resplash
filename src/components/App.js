import React from 'react'

import '../assets/scss/style.scss'

import unsplash from '../api/unsplash'

import SearchResult from './SearchResult'
import SearchBar from './SearchBar'

class App extends React.Component {

    state = {loaded: true, searching: false, images: []}
    
     onSearchSubmit = async (term) => {
        // console.log(term)
        this.setState({searching: true})
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        })

        this.setState({images: response.data.results})
        this.setState({searching: false})
    }

    componentDidMount = () => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.setState({loaded: true})
            }, 500)
        })
    }


    render() {
        return (
            <>
            <div className={`ui inverted dimmer ${this.state.loaded ? '' : 'active'}`}>
                <div className="ui text loader">Loading...</div>
            </div>
            <div className="main-grid">
                <div className="search-wrapper">
                    <div className="ui three centered column grid container">
                        <div className="column">
                            <h1 style={{textAlign: 'center', fontSize: 42, color: '#fff', fontWeight: 500, fontFamily: "'Lobster', cursive"}}>Resplash.</h1>
                            <p style={{textAlign: 'center', fontSize: 18, color: '#fff'}}>Find your favorite images here</p>
                            <div className="ui segment raised">
                                <SearchBar searching={this.state.searching} onSubmit={this.onSearchSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: 20}} className="ui grid three stackable cards container container-result">
                <SearchResult data={this.state.images} />
            </div>
            </>
        )
    }
}

export default App