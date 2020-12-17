import React from 'react'
import axios from 'axios'

import '../assets/scss/style.scss'

import SearchResult from './SearchResult'
import SearchBar from './SearchBar'

class App extends React.Component {

    state = {loaded: true, searching: false}
    
    onSearchSubmit(term) {
        // console.log(term)

        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 31F9NmISiAMNK6OVl83p9QKTB9rw1MKZVAnaDKZYm0g'
            }
        })
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
            <div className="ui three column centered grid main-grid">
                <div className={`ui inverted dimmer ${this.state.loaded ? '' : 'active'}`}>
                    <div className="ui text loader">Loading...</div>
                </div>
                <div className="two column row search-wrapper">
                    <div className="column">
                        <h1 style={{textAlign: 'center', fontSize: 42, color: '#fff', fontWeight: 500, fontFamily: "'Lobster', cursive"}}>Resplash.</h1>
                        <p style={{textAlign: 'center', fontSize: 18, color: '#fff'}}>Find your favorite images here</p>
                        <div className="ui segment raised">
                            <SearchBar searching={this.searching} onSubmit={this.onSearchSubmit} />
                        </div>
                    </div>
                </div>
                <div className="two column row">
                    <SearchResult />
                </div>
            </div>
        )
    }
}

export default App